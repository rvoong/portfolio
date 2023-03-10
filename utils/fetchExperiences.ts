import { Experience } from "../typings"

export const fetchExperiences = async() =>{
    //call to backend
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

    const data = await res.json()
    const experience: Experience[] = data.experience;

    // console.log("fetching", pageInfo);

    return experience;
};