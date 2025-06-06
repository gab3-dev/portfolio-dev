import '../styles/main-macbook-mockup.css';

export default function MainMacbookMockup({ children }: { children: React.ReactNode }) {
    return (
        <div className="mbp-mockup-wrapper">
            <div className="mbp-container">
                <div className="mbp-display with-glare">
                    <div className="display-edge">
                        <div className="bezel">
                            <div className="display-camera" ></div>
                            <div className="display-frame">
                                {children}
                            </div>
                            <div className="below-display">
                                <div className="macbookpro"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mbp-keyboard">
                    <div className="front">
                        <div className="opener-left"></div>
                        <div className="opener-right"></div>
                    </div>
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                    <div className="mbp-shadow">
                        <div className="shadow-left"></div>
                        <div className="shadow-right"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
