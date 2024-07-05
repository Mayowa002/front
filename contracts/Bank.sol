// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

//  a contract that allows deposit and withdrawal of funds.... 1
//  modify it to become a lottery contract....
// deploy it sepolia testnet
//  verify the contract....

// sepolia, mumbai, goerli,rinskeby

// rules of my lotteery contract
// 1. min everybody must deposit 0.01 ether;
//  when 100 people have deposited pick a random winner 
//  send the money to the person

contract Bank {

    uint256 counter; // use this to know how many users are currenlt using our bank
    mapping(address user => uint256 balance) public userBalance;

    event Deposit(address indexed from , uint indexed  amountSent); // index max is 3 times
    event Withdraw(address from, uint withrawnAmount,   uint amountLeft);


    function deposit()  public payable {
        // userBalance[msg.sender] = userBalance[msg.sender] +  msg.value; this is the same as the one below
        uint256 userBalances = userBalance[msg.sender];
        if(userBalances == 0){
        counter++;
        } 
        
        userBalance[msg.sender]+= msg.value;
        emit Deposit(msg.sender, msg.value); // assignment... 
    }



    function withdraw(uint256 amount) public payable  {
         userBalance[msg.sender] -= amount;
        // the safest way to send ether is to use low level (call)
    (bool success, )=(msg.sender).call{value: amount}(''); // can fail silently

    require(success, "trainsfer failed");
    emit Withdraw(msg.sender, amount, address(this).balance);

    }

    //  getter functions...

    function getCounter() public  view returns(uint){
        return counter;
    }

    function getCurrentUSerBalance(address _user) public view returns(uint){
        return userBalance[_user];
    }

}

