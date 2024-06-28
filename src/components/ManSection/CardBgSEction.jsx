import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl mx-auto px-6 -mt-8">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Quiff",
        description:
            "A stylish and dynamic cut, perfect for a contemporary, suave appearance. The quiff combines volume and texture for a bold, modern look.",

    },
    {
        title: "Comb Over",
        description:
            "Timeless and sophisticated, the comb over is ideal for a polished, refined look. This classic hairstyle features a sleek part and a smooth finish.",

    },
    {
        title: "Side Part",
        description:
            "Elegant and versatile, the side part is perfect for both professional and casual settings. This cut offers a clean, structured look with a defined part.",

    },
    {
        title: "Ivy League",
        description:
            "A collegiate classic, offering a neat and distinguished style. The Ivy League cut is a longer version of the crew cut, providing a versatile and preppy appearance.",

    },

];
