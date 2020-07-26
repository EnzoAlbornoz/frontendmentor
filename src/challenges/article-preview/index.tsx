// Import Dependencies
import React from "react";
import type { RouteComponentProps } from "@reach/router";
import styled from "styled-components";
import dayjs from "dayjs";
import { Helmet } from "react-helmet";
// Import Components
import ArticlePreview, {
	IArticlePreviewProps,
} from "./components/ArticlePreview";
import PreviewImage from "./assets/drawers.jpg";
import WriterAvatar from "./assets/avatar-michelle.jpg";
// Define Styles
const Page = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: hsl(210, 46%, 95%);
`;
// Define Contents
const contents: IArticlePreviewProps = {
	title:
		"Shift the overall look and feel by adding these wonderful touches to furniture in your home",
	description:
		"Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninvinting. I've got some simple tips to help you make any room feel complete",
	previewImage: PreviewImage,
	writerAvatar: WriterAvatar,
	author: "Michelle Appleton",
	publishDate: dayjs("2020-06-28").toDate(),
	shortLink: "https://www.google.com.br",
};
// Export Challenge
export default function ArticlePreviewChallenge(
	props: RouteComponentProps
): JSX.Element {
	return (
		<Page>
			{/* Define metas tags for that challenge */}
			<Helmet>
				<link
					href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
					rel="stylesheet"
				/>
			</Helmet>
			<ArticlePreview
				title={contents.title}
				description={contents.description}
				previewImage={contents.previewImage}
				writerAvatar={contents.writerAvatar}
				author={contents.author}
				publishDate={contents.publishDate}
				shortLink={contents.shortLink}
			/>
		</Page>
	);
}
