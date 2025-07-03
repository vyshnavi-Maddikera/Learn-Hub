"use client"

import Program from "@/components/Program"
import axios from "@/utils/axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProgramPage({ params }) {
    const type = params.type;
    const [courses, setCourses] = useState([])

    useEffect(() => {
        const getAllCourses = async () => {
            const res = await axios.get(`/api/courses/c/${type}`)           
            setCourses(res.data)
        }
        getAllCourses()
    }, [])

    return (
        <div className="mt-32 h-screen">
            <div className="bg-white mt-32">
                <div className="w-3/4 grid md:grid-cols-2 gap-5 mx-auto rounded-md">
                    {
                        courses.map((course, i) => {
                            return (
                                <Link key={i} href={`/programs/${type}/${course._id}`}>
                                    <Program name={course.name} discipline={course.discipline} metadata={course.metadata.professor} />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
