"use server";
import { fetchCitiesAndAreas } from "./FetchCityCash";

export default async function FetchCity() {
    try {
        const cities = await fetchCitiesAndAreas();
        return cities;
    } catch (error) {
        console.error("Error fetching cities:", error);
        throw error;
    }
}
