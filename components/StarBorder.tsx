import React from 'react';
import './StarBorder.css';

type StarBorderProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties['animationDuration'];
    thickness?: number;
};

const StarBorder = React.forwardRef<HTMLDivElement, StarBorderProps>(({
    className = '',
    color = '#FF5722',
    speed = '6s',
    thickness = 1,
    children,
    ...rest
}: StarBorderProps, ref) => {
    return (
        <div
            ref={ref}
            className={`star-border-container ${className}`}
            {...rest}
            style={{
                '--star-color': color,
                padding: `${thickness}px 0`,
                ...(rest as any).style
            } as React.CSSProperties}
        >
            <div
                className="border-gradient-bottom"
                style={{
                    animationDuration: speed
                }}
            ></div>
            <div
                className="border-gradient-top"
                style={{
                    animationDuration: speed
                }}
            ></div>
            <div className="inner-content">{children}</div>
        </div>
    );
});

StarBorder.displayName = 'StarBorder';

export default StarBorder;
