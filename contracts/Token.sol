// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract Token{

    string public tokenName = "Nupat"; // slot 1 ... we will be avail
    string public tokenSymbol = "NPT"; // slot 2 
    uint public tokenTotalSupply = 20_000_000;
    uint8 public tokenDecimals = 18;

    mapping(address user => uint256 amount) public balances;   
    mapping (address user => mapping(address contracts => uint256 amount)) public allowances;
    function name() public view returns (string memory){
        return tokenName;
// uint32, uint
    }

    // calldata , memory.... 
    
    function symbol() public view returns (string memory){
        return tokenSymbol;
    }
    function decimals() public view returns (uint8){
        return tokenDecimals;
    } 
    function totalSupply() public view returns (uint256){
        return tokenTotalSupply;
    }

    function balanceOf(address _owner) public view returns (uint256 balance){
        balance = balances[_owner];
        return balance;
    }

    function transfer(address _to, uint256 _value) public returns (bool success){
    balances[msg.sender]-= _value;
    balances[_to] += _value;
    allowances[msg.sender][_to] -= _value;
    return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success){
    balances[_from] += _value;
    balances[_to] += _value;
    return true;

    }

    function approve(address _spender, uint256 _value) public returns (bool success){
    allowances[msg.sender][_spender] += _value;
    return true;
    }
    function allowance(address _owner, address _spender) public view returns (uint256 remaining){
    return allowances[_owner][_spender];
    }
}