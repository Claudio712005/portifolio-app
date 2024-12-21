import { FC, useEffect, useRef } from "react";

interface BlurryCursorProps {
    isActive: boolean;
}

const BlurryCursor: FC<BlurryCursorProps> = ({ isActive }) => {
    const circle = useRef<HTMLDivElement | null>(null);
    const rafId = useRef<number>(0);

    const size = isActive ? 200 : 30;

    const manageMouseMove = (event: MouseEvent) => {
        if (circle.current) {
            circle.current.style.top = `${event.clientY - size / 2}px`;
            circle.current.style.left = `${event.clientX - size / 2}px`;
        }
    };

    useEffect(() => {
        const animate = () => {
            rafId.current = requestAnimationFrame(animate);
        };
        animate();

        window.addEventListener("mousemove", manageMouseMove);

        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.cancelAnimationFrame(rafId.current);
        };
    }, [isActive]);

    return (
        <div className="relative h-screen">
            <div
                style={{
                    backgroundColor: "#BCE4F2",
                    width: size,
                    height: size,
                    filter: `blur(${isActive ? 30 : 0}px)`,
                    transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
                }}
                className="top-0 left-0 fixed rounded-full mix-blend-difference pointer-events-none"
                ref={circle}
            />
        </div>
    );
};

export default BlurryCursor;
