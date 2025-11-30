// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title LLMWarHistory
 * @dev Stores key events of the LLM Architecture War (2022-2025) on-chain for immutability.
 */
contract LLMWarHistory {
    struct Event {
        uint256 id;
        string title;
        string ipfsHash; // Link to full document/proof
        uint256 timestamp;
        string category; // e.g., "Release", "Conflict", "Milestone"
        address reporter;
    }

    Event[] public events;
    mapping(uint256 => bool) public verifiedEvents;
    address public owner;

    event EventSubmitted(uint256 indexed id, string title, address indexed reporter);
    event EventVerified(uint256 indexed id);

    constructor() {
        owner = msg.sender;
    }

    function submitEvent(string memory _title, string memory _ipfsHash, uint256 _timestamp, string memory _category) public {
        uint256 newId = events.length;
        events.push(Event({
            id: newId,
            title: _title,
            ipfsHash: _ipfsHash,
            timestamp: _timestamp,
            category: _category,
            reporter: msg.sender
        }));
        emit EventSubmitted(newId, _title, msg.sender);
    }

    function verifyEvent(uint256 _eventId) public {
        require(msg.sender == owner, "Only owner can verify events");
        require(_eventId < events.length, "Event does not exist");
        verifiedEvents[_eventId] = true;
        emit EventVerified(_eventId);
    }

    function getEventCount() public view returns (uint256) {
        return events.length;
    }

    function getEvent(uint256 _id) public view returns (Event memory) {
        require(_id < events.length, "Event does not exist");
        return events[_id];
    }
}
