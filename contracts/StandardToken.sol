// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract StandardToken is ERC20 {

    address public admin;
    constructor(address _owner, string memory name_, string memory symbol_)ERC20(name_, symbol_){
        admin = _owner;
    }
   
   mapping(address users => bool canWithdraw) public whiteList;
   mapping( address users => bool hasClaimed) public claimChecker;


    modifier onlyAdmin(){
        require(msg.sender == admin , "you are not the admin");
        _;
    }

    modifier hasNotClaimed() {
        require(claimChecker[msg.sender] == false, "");
        _;
    }
    modifier isWhitelisted() {
        require(whiteList[msg.sender], "");
        _;
    }
   function addToWhiteList(address _user) public onlyAdmin() {
        whiteList[_user]= true;
   }

    function claim() public isWhitelisted() hasNotClaimed(){
        super._mint(msg.sender, 1 ether);
    }

//    airdrop contract.... minimalistic..
// 1. admin that controlls the contract
//  function claim...
// function that we can use to whitelist users
// any other inspiration....
// disclamer! dont use this contratc for production...




}