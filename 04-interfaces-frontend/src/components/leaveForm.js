import React from "react";

const LeaveForm = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-center">Request Vacations</h2>
            <form className="flex flex-col items-center justify-center mt-4 w-1/2">
                <label htmlFor="leaveType" className="text-xl font-semibold text-center">Leave Type</label>
                <select id="leaveType" name="leaveType" className="w-full p-2 mt-2">
                    <option value="rtt">RTT</option>
                    <option value="cp">CP</option>
                    <option value="ce">Congé Exceptionnel</option>
                </select>
                <label htmlFor="startDate" className="text-xl font-semibold text-center mt-4">Start Date</label>
                <input type="date" id="startDate" name="startDate" className="w-full p-2 mt-2" />
                <label htmlFor="endDate" className="text-xl font-semibold text-center mt-4">End Date</label>
                <input type="date" id="endDate" name="endDate" className="w-full p-2 mt-2" />
                <label htmlFor="comments" className="text-xl font-semibold text-center mt-4">Comments</label>
                <textarea id="comments" name="comments" className="w-full p-2 mt-2 h-32"></textarea>
                <button type="submit" className="bg-green-500 text-white font-semibold rounded-lg p-2 mt-4">Submit</button>
            </form>
        </div>
    );
}

export default LeaveForm;