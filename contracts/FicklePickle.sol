// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

/// @custom:security-contact wakeup2early@gmail.com
contract FicklePickle is ERC721, ERC721Enumerable, Ownable, ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    // Mapping from address and tokenID to the amount of time that token was held by that address
    mapping(address => mapping(uint256 => uint256)) tokenTime;

    // Mapping from a tokenID to when that token was last stolen
    mapping(uint256 => uint256) blockStolen;

    constructor() ERC721("Fickle Pickle", "PICKLE") {}

    function steal(uint256 tokenId) public {
        // Steal the token
        address from = ownerOf(tokenId);
        address to = msg.sender;
        _transfer(from, to, tokenId);

        // Update the tokenTime
        uint256 timeGained = block.number - blockStolen[tokenId];
        tokenTime[from][tokenId] += timeGained;

        // Set the block it was stolen
        blockStolen[tokenId] = block.number;
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        // Get current ID and increment counter
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();

        // Mint the token
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        console.log("Pickle %s minted to", tokenId, to);

        // Set blockStolen to when it was minted
        blockStolen[tokenId] = block.number;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        return super.tokenURI(tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
