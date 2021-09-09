//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract NFTBank {

    struct NFT {
        uint256 id;
        address owner;
        string uri;
    }

    address owner;
    uint _nftCount;

    mapping(uint256 => NFT) nfts;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function create(string memory _uri) public{
        NFT memory nft = NFT(
            _nftCount,
            msg.sender,
            _uri
        );
        nfts[nft.id] = nft;
        _nftCount++;
    }

    function transfer(uint256 _id, address _to) public onlyOwner {
        NFT memory nft = nfts[_id];
        nft.owner = _to;
        nfts[_id] = nft;
    }

    function getURI(uint256 _id) public view returns (string memory) {
        NFT memory nft = nfts[_id];
        return nft.uri;
    }
}