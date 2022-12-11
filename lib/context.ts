import { createContext } from "react";
import clientPromise from "./mongodb";

export const DBContext = createContext(clientPromise);
