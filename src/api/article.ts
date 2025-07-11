import { ArticlesData } from "@/type";
import request from "@/utils/request";

export function getArticles(params?: {
  tag?: string;
  author?: string;
  favorited?: string;
  offset?: number;
  limit?: number;
}) {
  return request<ArticlesData>({
    url: "/articles",
    method: "GET",
    params: params,
  });
}
