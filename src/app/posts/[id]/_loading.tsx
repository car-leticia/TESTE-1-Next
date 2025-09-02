import { Heading } from "@chakra-ui/react";
import { h3 } from "framer-motion/client";

export default function Loading(){
    return (
        <Heading as={h3}>
            Carregando...
        </Heading>
    )

}