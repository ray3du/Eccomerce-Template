// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract Tokens is ERC20{
    constructor(string memory _name, string memory _symbol)
        ERC20(_name, _symbol) 
    {

    }

    mapping(address => uint256) public balance;

    function mint(uint _amount) public {
        _mint(msg.sender, _amount);
        balance[msg.sender] = _amount;
        payable(msg.sender).transfer(_amount);
    }

    
}