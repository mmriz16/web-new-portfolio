"use client";

import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";
import "./swagger-custom.css";

// Dynamic import to avoid SSR issues with Swagger UI
const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false });

export default function ApiDocs() {
    return (
        <div className="min-h-screen">
            <SwaggerUI url="/openapi.json" />
        </div>
    );
}
