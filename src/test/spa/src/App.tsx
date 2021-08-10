
import { makeStyles } from "makeStyles";
import { GlobalStyles } from "tss-react";
import { styled } from "@material-ui/core";

export type Props = {
	className?: string;
};

const useStyles = makeStyles()(theme => ({
	"root": {
		"& > h1:nth-child(2)": {
			"color": theme.limeGreen,
		},
	},
	"last": {
		"color": "darkred"
	}
}));

const H1 = styled('h1')({
	"color": "yellow"
});

export function App(props: Props) {
	const { className } = props;
	const { classes, css, cx } = useStyles();

	return (
		<>
			<GlobalStyles
				styles={{
					"body": {
						"backgroundColor": "pink"
					},
					".foo": {
						"color": "cyan"
					}
				}}
			/>
			<div className={classes.root}>
				<h1>Black</h1>
				<h1>Should be lime green</h1>
				<h1
					className={cx(
						css({ "border": "1px solid black" }),
						className
					)}
				>
					Black, should have border and shadow
				</h1>
				<h1 className="foo">Should be cyan</h1>
				<H1>Should be yellow</H1>
				<H1 className={classes.last}>Should be dark red</H1>
			</div>
		</>
	);
}