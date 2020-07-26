// Import Dependencies
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { MdReply as ReplyIcon } from "react-icons/md";
import {
	AiFillFacebook as FacebookIcon,
	AiOutlineTwitter as TwitterIcon,
} from "react-icons/ai";
import { FaPinterest as PinterestIcon } from "react-icons/fa";
// Define Types
export interface IArticlePreviewProps {
	title: string;
	description: string;
	author: string;
	publishDate: Date;
	previewImage: string;
	writerAvatar: string;
	shortLink: string;
}
interface ArticleImageProps {
	previewImage: string;
}
interface ArticleShareDesktopOptionsProps {
	visible: boolean;
}
// Define Styles
const ArticleBody = styled.section`
	max-width: 750px;
	max-height: 300px;
	background-color: white;
	border-radius: 8px;
	box-shadow: 0 0 20px hsl(212, 23%, 69%);
	display: flex;
`;
const ArticleImage = styled.img`
	width: 300px;
	height: 300px;
	border-radius: 8px 0 0 8px;
	object-fit: cover;
	object-position: 0%;
`;
const ArticleText = styled.aside`
	font-family: "Manrope", sans-serif;
	padding: 36px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const ArticleTextTitle = styled.h3`
	color: hsl(217, 19%, 35%);
	font-size: 22px;
	font-weight: 700;
	line-height: 1.8rem;
`;
const ArticleTextBody = styled.p`
	font-size: 13px;
	font-weight: 500;
	color: hsl(214, 17%, 51%);
	line-height: 1.2rem;
`;
const ArticleMisc = styled.footer`
	display: flex;
	justify-content: space-between;
`;
const ArticleMeta = styled.section`
	display: flex;
`;
const ArticleMetaImage = styled.img`
	height: 42px;
	width: 42px;
	border-radius: 100%;
`;
const ArticleMetaText = styled.main`
	padding-left: 16px;
	font-size: 13px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;
const ArticleMetaWriter = styled.strong`
	color: hsl(217, 19%, 35%);
	font-weight: 700;
`;
const ArticleMetaDate = styled.p`
	color: hsl(212, 23%, 69%);
`;
const ArticleShare = styled.button`
	all: unset;
	position: relative;
	background-color: hsl(210, 46%, 95%);
	margin: auto 0;
	border-radius: 100%;
`;
const ArticleShareIcon = styled(ReplyIcon)`
	transform: scaleX(-1);
	color: hsl(214, 17%, 51%);
	padding: 4px;

	&:hover {
		cursor: pointer;
	}
`;
const ArticleShareDesktopOptions = styled.div`
	visibility: ${(props: ArticleShareDesktopOptionsProps) =>
		props.visible ? "visible" : "hidden"};
	position: absolute;
	transform: translateX(-50%);
	left: 50%;
	bottom: 175%;
	z-index: 1;
	padding: 14px 32px;
	border-radius: 8px;
	background-color: hsl(217, 19%, 35%);
	box-shadow: 0 0 10px hsl(212, 23%, 69%);

	&::after {
		content: "";
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -10px;
		border-width: 10px;
		border-style: solid;
		border-color: hsl(217, 19%, 35%) transparent transparent transparent;
	}
`;
const ArticleShareBody = styled.div`
	color: white;
	display: flex;
	align-content: center;
	align-items: center;
`;
const ArticleShareBodyText = styled.span`
	font-family: "Manrope", sans-serif;
	font-weight: 100;
	font-size: 12px;
	padding: 0px 8px;
	letter-spacing: 0.6em;
`;
const ArticleShareBodyLink = styled.a`
	color: white;

	&:link,
	&:visited,
	&:hover,
	&:active {
		color: white;
	}
`;
const ArticleShareBodyFacebookIcon = styled(FacebookIcon)`
	padding: 0 6px;

	&:hover {
		cursor: pointer;
	}
`;
const ArticleShareBodyTwitterIcon = styled(TwitterIcon)`
	padding: 0 6px;

	&:hover {
		cursor: pointer;
	}
`;
const ArticleShareBodyPinterestIcon = styled(PinterestIcon)`
	padding: 0 6px;

	&:hover {
		cursor: pointer;
	}
`;
// Export Component
export default function ArticlePreview({
	title,
	description,
	previewImage,
	writerAvatar,
	author,
	publishDate: publishDateRaw,
	shortLink: shortLinkRaw,
}: IArticlePreviewProps): JSX.Element {
	// Define transformed data
	const shortLink = useMemo(() => encodeURIComponent(shortLinkRaw), [
		shortLinkRaw,
	]);
	const publishDate = useMemo(
		() => dayjs(publishDateRaw).format("DD MMM YYYY"),
		[publishDateRaw]
	);
	const [sharedSelected, setSharedSelected] = useState(false);
	// Define render
	return (
		<>
			<ArticleBody>
				<ArticleImage src={previewImage} />
				<ArticleText>
					<ArticleTextTitle>{title}</ArticleTextTitle>
					<ArticleTextBody>{description}</ArticleTextBody>
					<ArticleMisc>
						<ArticleMeta>
							<ArticleMetaImage src={writerAvatar} />
							<ArticleMetaText>
								<ArticleMetaWriter>{author}</ArticleMetaWriter>
								<ArticleMetaDate>{publishDate}</ArticleMetaDate>
							</ArticleMetaText>
						</ArticleMeta>
						<ArticleShare>
							<ArticleShareDesktopOptions
								visible={sharedSelected}
							>
								<ArticleShareBody>
									<ArticleShareBodyText>
										SHARE
									</ArticleShareBodyText>
									<ArticleShareBodyLink
										href={`https://www.facebook.com/sharer/sharer.php?u=${shortLink}`}
									>
										<ArticleShareBodyFacebookIcon
											size={24}
											title="Share on Facebook"
										/>
									</ArticleShareBodyLink>
									<ArticleShareBodyLink
										href={`https://twitter.com/intent/tweet?url=${shortLink}`}
									>
										<ArticleShareBodyTwitterIcon
											size={24}
											title="Share on Twitter"
										/>
									</ArticleShareBodyLink>
									<ArticleShareBodyLink
										href={`http://pinterest.com/pin/create/button/?url=${shortLink}`}
									>
										<ArticleShareBodyPinterestIcon
											size={24}
											title="Share on Pinterest"
										/>
									</ArticleShareBodyLink>
								</ArticleShareBody>
							</ArticleShareDesktopOptions>
							<ArticleShareIcon
								size={24}
								title="Share Menu"
								onClick={() =>
									setSharedSelected(!sharedSelected)
								}
							/>
						</ArticleShare>
					</ArticleMisc>
				</ArticleText>
			</ArticleBody>
		</>
	);
}
