import React from "react";

const LeaveSummary = () => {

    const totalLeave = 3;
    const leaveTypes = ["Leave 1", "Leave 2", "Leave 3"];
    const totalLeft = totalLeave - leaveTypes.length;

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-center">Vacation summary</h1>
            <div className="flex flex-col items-center justify-center mt-4 w-1/2">
                <div className="flex flex-col items-center justify-center gap-8 w-full">
                    <div className="flex flex-row items-center justify-center w-full">
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <h2 className="text-xl font-semibold text-center">Total leave</h2>
                            <p className="text-center">{totalLeave}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <h2 className="text-xl font-semibold text-center">Total left</h2>
                            <p className="text-center">{totalLeft}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeaveSummary;