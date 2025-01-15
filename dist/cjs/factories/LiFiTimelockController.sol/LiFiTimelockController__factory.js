"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiFiTimelockController__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_minDelay",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_proposers",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "_executors",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "_admin",
                type: "address",
                internalType: "address",
            },
            {
                name: "_diamond",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "receive",
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "CANCELLER_ROLE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "DEFAULT_ADMIN_ROLE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "EXECUTOR_ROLE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "PROPOSER_ROLE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "TIMELOCK_ADMIN_ROLE",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "cancel",
        inputs: [
            {
                name: "id",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "diamond",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "execute",
        inputs: [
            {
                name: "target",
                type: "address",
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "payload",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "predecessor",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "salt",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "executeBatch",
        inputs: [
            {
                name: "targets",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "values",
                type: "uint256[]",
                internalType: "uint256[]",
            },
            {
                name: "payloads",
                type: "bytes[]",
                internalType: "bytes[]",
            },
            {
                name: "predecessor",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "salt",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "getMinDelay",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getRoleAdmin",
        inputs: [
            {
                name: "role",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "getTimestamp",
        inputs: [
            {
                name: "id",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "grantRole",
        inputs: [
            {
                name: "role",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "account",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "hasRole",
        inputs: [
            {
                name: "role",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "account",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "hashOperation",
        inputs: [
            {
                name: "target",
                type: "address",
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "predecessor",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "salt",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "hashOperationBatch",
        inputs: [
            {
                name: "targets",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "values",
                type: "uint256[]",
                internalType: "uint256[]",
            },
            {
                name: "payloads",
                type: "bytes[]",
                internalType: "bytes[]",
            },
            {
                name: "predecessor",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "salt",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "isOperation",
        inputs: [
            {
                name: "id",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "isOperationDone",
        inputs: [
            {
                name: "id",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "isOperationPending",
        inputs: [
            {
                name: "id",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "isOperationReady",
        inputs: [
            {
                name: "id",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "onERC1155BatchReceived",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
            {
                name: "",
                type: "address",
                internalType: "address",
            },
            {
                name: "",
                type: "uint256[]",
                internalType: "uint256[]",
            },
            {
                name: "",
                type: "uint256[]",
                internalType: "uint256[]",
            },
            {
                name: "",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes4",
                internalType: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "onERC1155Received",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
            {
                name: "",
                type: "address",
                internalType: "address",
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes4",
                internalType: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "onERC721Received",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
            {
                name: "",
                type: "address",
                internalType: "address",
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes4",
                internalType: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "renounceRole",
        inputs: [
            {
                name: "role",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "account",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "revokeRole",
        inputs: [
            {
                name: "role",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "account",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "schedule",
        inputs: [
            {
                name: "target",
                type: "address",
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "data",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "predecessor",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "salt",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "delay",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "scheduleBatch",
        inputs: [
            {
                name: "targets",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "values",
                type: "uint256[]",
                internalType: "uint256[]",
            },
            {
                name: "payloads",
                type: "bytes[]",
                internalType: "bytes[]",
            },
            {
                name: "predecessor",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "salt",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "delay",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "setDiamondAddress",
        inputs: [
            {
                name: "_diamond",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "supportsInterface",
        inputs: [
            {
                name: "interfaceId",
                type: "bytes4",
                internalType: "bytes4",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "unpauseDiamond",
        inputs: [
            {
                name: "_blacklist",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "updateDelay",
        inputs: [
            {
                name: "newDelay",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "CallExecuted",
        inputs: [
            {
                name: "id",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "index",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "target",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "data",
                type: "bytes",
                indexed: false,
                internalType: "bytes",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "CallSalt",
        inputs: [
            {
                name: "id",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "salt",
                type: "bytes32",
                indexed: false,
                internalType: "bytes32",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "CallScheduled",
        inputs: [
            {
                name: "id",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "index",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "target",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "value",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "data",
                type: "bytes",
                indexed: false,
                internalType: "bytes",
            },
            {
                name: "predecessor",
                type: "bytes32",
                indexed: false,
                internalType: "bytes32",
            },
            {
                name: "delay",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "Cancelled",
        inputs: [
            {
                name: "id",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "DiamondAddressUpdated",
        inputs: [
            {
                name: "diamond",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "MinDelayChange",
        inputs: [
            {
                name: "oldDuration",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "newDuration",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "RoleAdminChanged",
        inputs: [
            {
                name: "role",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "previousAdminRole",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "newAdminRole",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "RoleGranted",
        inputs: [
            {
                name: "role",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "account",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "sender",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "RoleRevoked",
        inputs: [
            {
                name: "role",
                type: "bytes32",
                indexed: true,
                internalType: "bytes32",
            },
            {
                name: "account",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "sender",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162002edc38038062002edc83398101604081905262000034916200045a565b848484846200005360008051602062002e5c833981519152806200027f565b6200007d60008051602062002e7c83398151915260008051602062002e5c8339815191526200027f565b620000a760008051602062002e9c83398151915260008051602062002e5c8339815191526200027f565b620000d160008051602062002ebc83398151915260008051602062002e5c8339815191526200027f565b620000ec60008051602062002e5c83398151915230620002ca565b6001600160a01b0381161562000117576200011760008051602062002e5c83398151915282620002ca565b60005b83518110156200019d576200016160008051602062002e7c8339815191528583815181106200014d576200014d620004f4565b6020026020010151620002ca60201b60201c565b6200018a60008051602062002ebc8339815191528583815181106200014d576200014d620004f4565b62000195816200050a565b90506200011a565b5060005b8251811015620001e757620001d460008051602062002e9c8339815191528483815181106200014d576200014d620004f4565b620001df816200050a565b9050620001a1565b5060028490556040805160008152602081018690527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a15050600380546001600160a01b0319166001600160a01b0385169081179091556040519092507f13b615d4c78f2fc10f9ce5a15d0e540cefe4a3a3f963de10e452b07a2b7568d99150600090a2505050505062000532565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b620002d68282620002da565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620002d6576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620003363390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620003a857600080fd5b919050565b600082601f830112620003bf57600080fd5b815160206001600160401b0380831115620003de57620003de6200037a565b8260051b604051601f19603f830116810181811084821117156200040657620004066200037a565b6040529384528581018301938381019250878511156200042557600080fd5b83870191505b848210156200044f576200043f8262000390565b835291830191908301906200042b565b979650505050505050565b600080600080600060a086880312156200047357600080fd5b855160208701519095506001600160401b03808211156200049357600080fd5b620004a189838a01620003ad565b95506040880151915080821115620004b857600080fd5b50620004c788828901620003ad565b935050620004d86060870162000390565b9150620004e86080870162000390565b90509295509295909350565b634e487b7160e01b600052603260045260246000fd5b6000600182016200052b57634e487b7160e01b600052601160045260246000fd5b5060010190565b61291a80620005426000396000f3fe6080604052600436106101dc5760003560e01c806364d6235311610102578063bc197c8111610095578063e38335e511610064578063e38335e51461067e578063f0b7db4e14610691578063f23a6e61146106e3578063f27a0c921461072857600080fd5b8063bc197c81146105cc578063c4d252f514610611578063d45c443514610631578063d547741f1461065e57600080fd5b806391d14854116100d157806391d1485414610512578063a217fddf14610563578063b08e51c014610578578063b1c5f427146105ac57600080fd5b806364d623531461047e5780638065657f1461049e5780638f2a0bb0146104be5780638f61f4f5146104de57600080fd5b8063248a9ca31161017a5780632fc487ae116101495780632fc487ae146103fe57806331d507501461041e57806336568abe1461043e578063584b153e1461045e57600080fd5b8063248a9ca31461035d57806326eb8b061461038d5780632ab0f529146103ad5780632f2ff15d146103de57600080fd5b80630d3cf6fc116101b65780630d3cf6fc14610281578063134008d3146102b557806313bc9f20146102c8578063150b7a02146102e857600080fd5b806301d5062a146101e857806301ffc9a71461020a57806307bd02651461023f57600080fd5b366101e357005b600080fd5b3480156101f457600080fd5b50610208610203366004611d8e565b61073d565b005b34801561021657600080fd5b5061022a610225366004611e03565b610813565b60405190151581526020015b60405180910390f35b34801561024b57600080fd5b506102737fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b604051908152602001610236565b34801561028d57600080fd5b506102737f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b6102086102c3366004611e45565b61086f565b3480156102d457600080fd5b5061022a6102e3366004611eb1565b610967565b3480156102f457600080fd5b5061032c610303366004611fd6565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610236565b34801561036957600080fd5b50610273610378366004611eb1565b60009081526020819052604090206001015490565b34801561039957600080fd5b506102086103a836600461203e565b61098d565b3480156103b957600080fd5b5061022a6103c8366004611eb1565b6000908152600160208190526040909120541490565b3480156103ea57600080fd5b506102086103f9366004612059565b610a27565b34801561040a57600080fd5b506102086104193660046120ca565b610a51565b34801561042a57600080fd5b5061022a610439366004611eb1565b610b0a565b34801561044a57600080fd5b50610208610459366004612059565b610b23565b34801561046a57600080fd5b5061022a610479366004611eb1565b610bdb565b34801561048a57600080fd5b50610208610499366004611eb1565b610bf1565b3480156104aa57600080fd5b506102736104b9366004611e45565b610cc1565b3480156104ca57600080fd5b506102086104d936600461210c565b610d00565b3480156104ea57600080fd5b506102737fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc181565b34801561051e57600080fd5b5061022a61052d366004612059565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b34801561056f57600080fd5b50610273600081565b34801561058457600080fd5b506102737ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78381565b3480156105b857600080fd5b506102736105c73660046121be565b610f73565b3480156105d857600080fd5b5061032c6105e73660046122e7565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b34801561061d57600080fd5b5061020861062c366004611eb1565b610fb8565b34801561063d57600080fd5b5061027361064c366004611eb1565b60009081526001602052604090205490565b34801561066a57600080fd5b50610208610679366004612059565b6110b3565b61020861068c3660046121be565b6110d8565b34801561069d57600080fd5b506003546106be9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610236565b3480156106ef57600080fd5b5061032c6106fe366004612391565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b34801561073457600080fd5b50600254610273565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc161076781611385565b6000610777898989898989610cc1565b90506107838184611392565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a6040516107bf9695949392919061243f565b60405180910390a3831561080857807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d0387856040516107ff91815260200190565b60405180910390a25b505050505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e00000000000000000000000000000000000000000000000000000000014806108695750610869826114da565b92915050565b600080527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d70696020527f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea157951547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff166108ec576108ec8133611571565b60006108fc888888888888610cc1565b90506109088185611629565b61091488888888611766565b6000817fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588a8a8a8a60405161094c949392919061248a565b60405180910390a361095d8161186a565b5050505050505050565b6000818152600160205260408120546001811180156109865750428111155b9392505050565b7f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca56109b781611385565b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091556040517f13b615d4c78f2fc10f9ce5a15d0e540cefe4a3a3f963de10e452b07a2b7568d990600090a25050565b600082815260208190526040902060010154610a4281611385565b610a4c8383611913565b505050565b7f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5610a7b81611385565b6003546040517f2fc487ae00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690632fc487ae90610ad3908690869060040161251e565b600060405180830381600087803b158015610aed57600080fd5b505af1158015610b01573d6000803e3d6000fd5b50505050505050565b60008181526001602052604081205481905b1192915050565b73ffffffffffffffffffffffffffffffffffffffff81163314610bcd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b610bd78282611a03565b5050565b6000818152600160208190526040822054610b1c565b333014610c80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201527f62652074696d656c6f636b0000000000000000000000000000000000000000006064820152608401610bc4565b60025460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1600255565b6000868686868686604051602001610cde9695949392919061243f565b6040516020818303038152906040528051906020012090509695505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1610d2a81611385565b888714610db9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f74636800000000000000000000000000000000000000000000000000000000006064820152608401610bc4565b888514610e48576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f74636800000000000000000000000000000000000000000000000000000000006064820152608401610bc4565b6000610e5a8b8b8b8b8b8b8b8b610f73565b9050610e668184611392565b60005b8a811015610f245780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e85818110610ea657610ea661253a565b9050602002016020810190610ebb919061203e565b8d8d86818110610ecd57610ecd61253a565b905060200201358c8c87818110610ee657610ee661253a565b9050602002810190610ef89190612569565b8c8b604051610f0c9695949392919061243f565b60405180910390a3610f1d816125fd565b9050610e69565b508315610f6657807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d038785604051610f5d91815260200190565b60405180910390a25b5050505050505050505050565b60008888888888888888604051602001610f94989796959493929190612635565b60405160208183030381529060405280519060200120905098975050505050505050565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783610fe281611385565b610feb82610bdb565b611077576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20636160448201527f6e6e6f742062652063616e63656c6c65640000000000000000000000000000006064820152608401610bc4565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b6000828152602081905260409020600101546110ce81611385565b610a4c8383611a03565b600080527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d70696020527f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea157951547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff16611155576111558133611571565b8786146111e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f74636800000000000000000000000000000000000000000000000000000000006064820152608401610bc4565b878414611273576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f74636800000000000000000000000000000000000000000000000000000000006064820152608401610bc4565b60006112858a8a8a8a8a8a8a8a610f73565b90506112918185611629565b60005b8981101561136f5760008b8b838181106112b0576112b061253a565b90506020020160208101906112c5919061203e565b905060008a8a848181106112db576112db61253a565b9050602002013590503660008a8a868181106112f9576112f961253a565b905060200281019061130b9190612569565b9150915061131b84848484611766565b84867fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b5886868686604051611352949392919061248a565b60405180910390a35050505080611368906125fd565b9050611294565b506113798161186a565b50505050505050505050565b61138f8133611571565b50565b61139b82610b0a565b15611428576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201527f7265616479207363686564756c656400000000000000000000000000000000006064820152608401610bc4565b6002548110156114ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e7460448201527f2064656c617900000000000000000000000000000000000000000000000000006064820152608401610bc4565b6114c4814261277f565b6000928352600160205260409092209190915550565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061086957507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610869565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16610bd7576115af81611aba565b6115ba836020611ad9565b6040516020016115cb9291906127b6565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a0000000000000000000000000000000000000000000000000000000008252610bc491600401612837565b61163282610967565b6116be576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20697360448201527f206e6f74207265616479000000000000000000000000000000000000000000006064820152608401610bc4565b8015806116da5750600081815260016020819052604090912054145b610bd7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e67206465706560448201527f6e64656e637900000000000000000000000000000000000000000000000000006064820152608401610bc4565b60008473ffffffffffffffffffffffffffffffffffffffff16848484604051611790929190612888565b60006040518083038185875af1925050503d80600081146117cd576040519150601f19603f3d011682016040523d82523d6000602084013e6117d2565b606091505b5050905080611863576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e67207460448201527f72616e73616374696f6e207265766572746564000000000000000000000000006064820152608401610bc4565b5050505050565b61187381610967565b6118ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20697360448201527f206e6f74207265616479000000000000000000000000000000000000000000006064820152608401610bc4565b600090815260016020819052604090912055565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16610bd75760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556119a53390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff1615610bd75760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b606061086973ffffffffffffffffffffffffffffffffffffffff831660145b60606000611ae8836002612898565b611af390600261277f565b67ffffffffffffffff811115611b0b57611b0b611eca565b6040519080825280601f01601f191660200182016040528015611b35576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611b6c57611b6c61253a565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611bcf57611bcf61253a565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611c0b846002612898565b611c1690600161277f565b90505b6001811115611cb3577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611c5757611c5761253a565b1a60f81b828281518110611c6d57611c6d61253a565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611cac816128af565b9050611c19565b508315610986576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610bc4565b803573ffffffffffffffffffffffffffffffffffffffff81168114611d4057600080fd5b919050565b60008083601f840112611d5757600080fd5b50813567ffffffffffffffff811115611d6f57600080fd5b602083019150836020828501011115611d8757600080fd5b9250929050565b600080600080600080600060c0888a031215611da957600080fd5b611db288611d1c565b965060208801359550604088013567ffffffffffffffff811115611dd557600080fd5b611de18a828b01611d45565b989b979a50986060810135976080820135975060a09091013595509350505050565b600060208284031215611e1557600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461098657600080fd5b60008060008060008060a08789031215611e5e57600080fd5b611e6787611d1c565b955060208701359450604087013567ffffffffffffffff811115611e8a57600080fd5b611e9689828a01611d45565b979a9699509760608101359660809091013595509350505050565b600060208284031215611ec357600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611f4057611f40611eca565b604052919050565b600082601f830112611f5957600080fd5b813567ffffffffffffffff811115611f7357611f73611eca565b611fa460207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611ef9565b818152846020838601011115611fb957600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215611fec57600080fd5b611ff585611d1c565b935061200360208601611d1c565b925060408501359150606085013567ffffffffffffffff81111561202657600080fd5b61203287828801611f48565b91505092959194509250565b60006020828403121561205057600080fd5b61098682611d1c565b6000806040838503121561206c57600080fd5b8235915061207c60208401611d1c565b90509250929050565b60008083601f84011261209757600080fd5b50813567ffffffffffffffff8111156120af57600080fd5b6020830191508360208260051b8501011115611d8757600080fd5b600080602083850312156120dd57600080fd5b823567ffffffffffffffff8111156120f457600080fd5b61210085828601612085565b90969095509350505050565b600080600080600080600080600060c08a8c03121561212a57600080fd5b893567ffffffffffffffff8082111561214257600080fd5b61214e8d838e01612085565b909b50995060208c013591508082111561216757600080fd5b6121738d838e01612085565b909950975060408c013591508082111561218c57600080fd5b506121998c828d01612085565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b60008060008060008060008060a0898b0312156121da57600080fd5b883567ffffffffffffffff808211156121f257600080fd5b6121fe8c838d01612085565b909a50985060208b013591508082111561221757600080fd5b6122238c838d01612085565b909850965060408b013591508082111561223c57600080fd5b506122498b828c01612085565b999c989b509699959896976060870135966080013595509350505050565b600082601f83011261227857600080fd5b8135602067ffffffffffffffff82111561229457612294611eca565b8160051b6122a3828201611ef9565b92835284810182019282810190878511156122bd57600080fd5b83870192505b848310156122dc578235825291830191908301906122c3565b979650505050505050565b600080600080600060a086880312156122ff57600080fd5b61230886611d1c565b945061231660208701611d1c565b9350604086013567ffffffffffffffff8082111561233357600080fd5b61233f89838a01612267565b9450606088013591508082111561235557600080fd5b61236189838a01612267565b9350608088013591508082111561237757600080fd5b5061238488828901611f48565b9150509295509295909350565b600080600080600060a086880312156123a957600080fd5b6123b286611d1c565b94506123c060208701611d1c565b93506040860135925060608601359150608086013567ffffffffffffffff8111156123ea57600080fd5b61238488828901611f48565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015260a06040820152600061247560a0830186886123f6565b60608301949094525060800152949350505050565b73ffffffffffffffffffffffffffffffffffffffff851681528360208201526060604082015260006124c06060830184866123f6565b9695505050505050565b8183526000602080850194508260005b858110156125135773ffffffffffffffffffffffffffffffffffffffff61250083611d1c565b16875295820195908201906001016124da565b509495945050505050565b6020815260006125326020830184866124ca565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261259e57600080fd5b83018035915067ffffffffffffffff8211156125b957600080fd5b602001915036819003821315611d8757600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361262e5761262e6125ce565b5060010190565b60a08152600061264960a083018a8c6124ca565b6020838203818501528882527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff89111561268257600080fd5b8860051b808b83850137808301925050808201818584030160408601528088825260408401905060408960051b85010191508960005b8a811015612763577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc086850301835281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18d360301811261271957600080fd5b8c01858101903567ffffffffffffffff81111561273557600080fd5b80360382131561274457600080fd5b61274f8682846123f6565b9550505091840191908401906001016126b8565b5050506060850196909652505050608001529695505050505050565b80820180821115610869576108696125ce565b60005b838110156127ad578181015183820152602001612795565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516127ee816017850160208801612792565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000601791840191820152835161282b816028840160208801612792565b01602801949350505050565b6020815260008251806020840152612856816040850160208701612792565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b8183823760009101908152919050565b8082028115828204841417610869576108696125ce565b6000816128be576128be6125ce565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019056fea264697066735822122000480bfec97cd40c26e687ed826acc9580f8adfe25a0a1445aa584a910fd06c164736f6c634300081100335f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63fd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783";
const isSuperArgs = (xs) => xs.length > 1;
class LiFiTimelockController__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_minDelay, _proposers, _executors, _admin, _diamond, overrides) {
        return super.deploy(_minDelay, _proposers, _executors, _admin, _diamond, overrides || {});
    }
    getDeployTransaction(_minDelay, _proposers, _executors, _admin, _diamond, overrides) {
        return super.getDeployTransaction(_minDelay, _proposers, _executors, _admin, _diamond, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.LiFiTimelockController__factory = LiFiTimelockController__factory;
Object.defineProperty(LiFiTimelockController__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(LiFiTimelockController__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=LiFiTimelockController__factory.js.map