"use server"
import { fetchCategories } from "./FetchCategoryCash"; // Adjust the import path as necessary

export const fetchCategoriesFromServer = async () => {
    try {
        const categories = await fetchCategories();
        return categories;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
};
