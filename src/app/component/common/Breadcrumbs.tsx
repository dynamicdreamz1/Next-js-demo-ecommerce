"use client"
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { usePathname } from "next/navigation";

const Breadcrumbs = ({ breadcrumbs }) => {
  const pathname = usePathname();

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex space-x-1 text-gray-500">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center font-normal">
            {index !== 0 && (
              <span className="mx-2">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            )}
            <Link
              href={breadcrumb.link}
              className={
                breadcrumb.link === pathname
                  ? "text-[#1E1E1E]"
                  : "text-[#666666]"
              }
            >
              {breadcrumb.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
