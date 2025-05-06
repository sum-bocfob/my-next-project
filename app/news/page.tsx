import React from "react";
import { getNewsList } from "../_libs/microcms";
import NewsList from "../_components/NewsList";
import { TOP_NEWS_LIMIT } from "../_constants";

export default async function Page() {
    const { contents: news } = await getNewsList();

    return <NewsList news={news} />;
}
