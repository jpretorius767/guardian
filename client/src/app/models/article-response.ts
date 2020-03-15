// {
//     "status": "ok",
//     "userTier": "developer",
//     "total": 140236,
//     "startIndex": 21,
//     "pageSize": 20,
//     "currentPage": 2,
//     "pages": 7012,
//     "orderBy": "relevance",
//     "results": []

import { Article } from './article';

export interface ArticleResponse {
    status: string;
    userTier: string;
    total: Number;
    startIndex: Number;
    pageSize: Number;
    currentPage: Number;
    pages: Number;
    orderBy: string;
    results: Article[];

}