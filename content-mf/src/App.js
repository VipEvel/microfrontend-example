import React from "react";
import { createRoot } from "react-dom/client";
import MainLayout from "main/MainLayout";

const root = createRoot(document.getElementById("content-mf"));
root.render(<MainLayout />);
