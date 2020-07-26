// Import Dependencies
import React from "react";
import { Router } from "@reach/router";
import { Reset as ResetStyles } from "styled-reset";
// Import Challenges
import DefaultPage from "./DefaultPage";
import ArticlePreviewChallenge from "./challenges/article-preview";
// Export Component
export default function App(): JSX.Element {
	return (
		<>
			<ResetStyles />
			<Router>
				<ArticlePreviewChallenge path="/article-preview" />
				<DefaultPage path="/" />
			</Router>
		</>
	);
}
