"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelockController__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "minDelay",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "proposers",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "executors",
                type: "address[]",
                internalType: "address[]",
            },
            {
                name: "admin",
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
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162002bec38038062002bec833981016040819052620000349162000408565b6200004f60008051602062002b6c833981519152806200022d565b6200007960008051602062002b8c83398151915260008051602062002b6c8339815191526200022d565b620000a360008051602062002bac83398151915260008051602062002b6c8339815191526200022d565b620000cd60008051602062002bcc83398151915260008051602062002b6c8339815191526200022d565b620000e860008051602062002b6c8339815191523062000278565b6001600160a01b0381161562000113576200011360008051602062002b6c8339815191528262000278565b60005b835181101562000199576200015d60008051602062002b8c8339815191528583815181106200014957620001496200048f565b60200260200101516200027860201b60201c565b6200018660008051602062002bcc8339815191528583815181106200014957620001496200048f565b6200019181620004a5565b905062000116565b5060005b8251811015620001e357620001d060008051602062002bac8339815191528483815181106200014957620001496200048f565b620001db81620004a5565b90506200019d565b5060028490556040805160008152602081018690527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a150505050620004cd565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b62000284828262000288565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000284576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002e43390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200035657600080fd5b919050565b600082601f8301126200036d57600080fd5b815160206001600160401b03808311156200038c576200038c62000328565b8260051b604051601f19603f83011681018181108482111715620003b457620003b462000328565b604052938452858101830193838101925087851115620003d357600080fd5b83870191505b84821015620003fd57620003ed826200033e565b83529183019190830190620003d9565b979650505050505050565b600080600080608085870312156200041f57600080fd5b845160208601519094506001600160401b03808211156200043f57600080fd5b6200044d888389016200035b565b945060408701519150808211156200046457600080fd5b5062000473878288016200035b565b92505062000484606086016200033e565b905092959194509250565b634e487b7160e01b600052603260045260246000fd5b600060018201620004c657634e487b7160e01b600052601160045260246000fd5b5060010190565b61268f80620004dd6000396000f3fe6080604052600436106101bb5760003560e01c80638065657f116100ec578063bc197c811161008a578063d547741f11610064578063d547741f146105fd578063e38335e51461061d578063f23a6e6114610630578063f27a0c921461067557600080fd5b8063bc197c811461056b578063c4d252f5146105b0578063d45c4435146105d057600080fd5b806391d14854116100c657806391d14854146104b1578063a217fddf14610502578063b08e51c014610517578063b1c5f4271461054b57600080fd5b80638065657f1461043d5780638f2a0bb01461045d5780638f61f4f51461047d57600080fd5b8063248a9ca31161015957806331d507501161013357806331d50750146103bd57806336568abe146103dd578063584b153e146103fd57806364d623531461041d57600080fd5b8063248a9ca31461033c5780632ab0f5291461036c5780632f2ff15d1461039d57600080fd5b80630d3cf6fc116101955780630d3cf6fc14610260578063134008d31461029457806313bc9f20146102a7578063150b7a02146102c757600080fd5b806301d5062a146101c757806301ffc9a7146101e957806307bd02651461021e57600080fd5b366101c257005b600080fd5b3480156101d357600080fd5b506101e76101e2366004611b88565b61068a565b005b3480156101f557600080fd5b50610209610204366004611bfd565b610760565b60405190151581526020015b60405180910390f35b34801561022a57600080fd5b506102527fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b604051908152602001610215565b34801561026c57600080fd5b506102527f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b6101e76102a2366004611c3f565b6107bc565b3480156102b357600080fd5b506102096102c2366004611cab565b6108b4565b3480156102d357600080fd5b5061030b6102e2366004611dd0565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610215565b34801561034857600080fd5b50610252610357366004611cab565b60009081526020819052604090206001015490565b34801561037857600080fd5b50610209610387366004611cab565b6000908152600160208190526040909120541490565b3480156103a957600080fd5b506101e76103b8366004611e38565b6108da565b3480156103c957600080fd5b506102096103d8366004611cab565b610904565b3480156103e957600080fd5b506101e76103f8366004611e38565b61091d565b34801561040957600080fd5b50610209610418366004611cab565b6109d5565b34801561042957600080fd5b506101e7610438366004611cab565b6109eb565b34801561044957600080fd5b50610252610458366004611c3f565b610abb565b34801561046957600080fd5b506101e7610478366004611ea9565b610afa565b34801561048957600080fd5b506102527fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc181565b3480156104bd57600080fd5b506102096104cc366004611e38565b60009182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b34801561050e57600080fd5b50610252600081565b34801561052357600080fd5b506102527ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78381565b34801561055757600080fd5b50610252610566366004611f5b565b610d6d565b34801561057757600080fd5b5061030b610586366004612084565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b3480156105bc57600080fd5b506101e76105cb366004611cab565b610db2565b3480156105dc57600080fd5b506102526105eb366004611cab565b60009081526001602052604090205490565b34801561060957600080fd5b506101e7610618366004611e38565b610ead565b6101e761062b366004611f5b565b610ed2565b34801561063c57600080fd5b5061030b61064b36600461212e565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b34801561068157600080fd5b50600254610252565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc16106b48161117f565b60006106c4898989898989610abb565b90506106d0818461118c565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a60405161070c969594939291906121dc565b60405180910390a3831561075557807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d03878560405161074c91815260200190565b60405180910390a25b505050505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e00000000000000000000000000000000000000000000000000000000014806107b657506107b6826112d4565b92915050565b600080527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d70696020527f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea157951547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff1661083957610839813361136b565b6000610849888888888888610abb565b90506108558185611423565b61086188888888611560565b6000817fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588a8a8a8a6040516108999493929190612227565b60405180910390a36108aa81611664565b5050505050505050565b6000818152600160205260408120546001811180156108d35750428111155b9392505050565b6000828152602081905260409020600101546108f58161117f565b6108ff838361170d565b505050565b60008181526001602052604081205481905b1192915050565b73ffffffffffffffffffffffffffffffffffffffff811633146109c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6109d182826117fd565b5050565b6000818152600160208190526040822054610916565b333014610a7a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201527f62652074696d656c6f636b00000000000000000000000000000000000000000060648201526084016109be565b60025460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1600255565b6000868686868686604051602001610ad8969594939291906121dc565b6040516020818303038152906040528051906020012090509695505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1610b248161117f565b888714610bb3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f746368000000000000000000000000000000000000000000000000000000000060648201526084016109be565b888514610c42576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f746368000000000000000000000000000000000000000000000000000000000060648201526084016109be565b6000610c548b8b8b8b8b8b8b8b610d6d565b9050610c60818461118c565b60005b8a811015610d1e5780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e85818110610ca057610ca0612267565b9050602002016020810190610cb59190612296565b8d8d86818110610cc757610cc7612267565b905060200201358c8c87818110610ce057610ce0612267565b9050602002810190610cf291906122b1565b8c8b604051610d06969594939291906121dc565b60405180910390a3610d1781612345565b9050610c63565b508315610d6057807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d038785604051610d5791815260200190565b60405180910390a25b5050505050505050505050565b60008888888888888888604051602001610d8e98979695949392919061242d565b60405160208183030381529060405280519060200120905098975050505050505050565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783610ddc8161117f565b610de5826109d5565b610e71576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20636160448201527f6e6e6f742062652063616e63656c6c656400000000000000000000000000000060648201526084016109be565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b600082815260208190526040902060010154610ec88161117f565b6108ff83836117fd565b600080527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d70696020527f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea157951547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff16610f4f57610f4f813361136b565b878614610fde576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f746368000000000000000000000000000000000000000000000000000000000060648201526084016109be565b87841461106d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f746368000000000000000000000000000000000000000000000000000000000060648201526084016109be565b600061107f8a8a8a8a8a8a8a8a610d6d565b905061108b8185611423565b60005b898110156111695760008b8b838181106110aa576110aa612267565b90506020020160208101906110bf9190612296565b905060008a8a848181106110d5576110d5612267565b9050602002013590503660008a8a868181106110f3576110f3612267565b905060200281019061110591906122b1565b9150915061111584848484611560565b84867fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588686868660405161114c9493929190612227565b60405180910390a3505050508061116290612345565b905061108e565b5061117381611664565b50505050505050505050565b611189813361136b565b50565b61119582610904565b15611222576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201527f7265616479207363686564756c6564000000000000000000000000000000000060648201526084016109be565b6002548110156112b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e7460448201527f2064656c6179000000000000000000000000000000000000000000000000000060648201526084016109be565b6112be81426124f4565b6000928352600160205260409092209190915550565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b0000000000000000000000000000000000000000000000000000000014806107b657507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316146107b6565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166109d1576113a9816118b4565b6113b48360206118d3565b6040516020016113c592919061252b565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a00000000000000000000000000000000000000000000000000000000082526109be916004016125ac565b61142c826108b4565b6114b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20697360448201527f206e6f742072656164790000000000000000000000000000000000000000000060648201526084016109be565b8015806114d45750600081815260016020819052604090912054145b6109d1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e67206465706560448201527f6e64656e6379000000000000000000000000000000000000000000000000000060648201526084016109be565b60008473ffffffffffffffffffffffffffffffffffffffff1684848460405161158a9291906125fd565b60006040518083038185875af1925050503d80600081146115c7576040519150601f19603f3d011682016040523d82523d6000602084013e6115cc565b606091505b505090508061165d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e67207460448201527f72616e73616374696f6e2072657665727465640000000000000000000000000060648201526084016109be565b5050505050565b61166d816108b4565b6116f9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20697360448201527f206e6f742072656164790000000000000000000000000000000000000000000060648201526084016109be565b600090815260016020819052604090912055565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff166109d15760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905561179f3390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16156109d15760008281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60606107b673ffffffffffffffffffffffffffffffffffffffff831660145b606060006118e283600261260d565b6118ed9060026124f4565b67ffffffffffffffff81111561190557611905611cc4565b6040519080825280601f01601f19166020018201604052801561192f576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061196657611966612267565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106119c9576119c9612267565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611a0584600261260d565b611a109060016124f4565b90505b6001811115611aad577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611a5157611a51612267565b1a60f81b828281518110611a6757611a67612267565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611aa681612624565b9050611a13565b5083156108d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016109be565b803573ffffffffffffffffffffffffffffffffffffffff81168114611b3a57600080fd5b919050565b60008083601f840112611b5157600080fd5b50813567ffffffffffffffff811115611b6957600080fd5b602083019150836020828501011115611b8157600080fd5b9250929050565b600080600080600080600060c0888a031215611ba357600080fd5b611bac88611b16565b965060208801359550604088013567ffffffffffffffff811115611bcf57600080fd5b611bdb8a828b01611b3f565b989b979a50986060810135976080820135975060a09091013595509350505050565b600060208284031215611c0f57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146108d357600080fd5b60008060008060008060a08789031215611c5857600080fd5b611c6187611b16565b955060208701359450604087013567ffffffffffffffff811115611c8457600080fd5b611c9089828a01611b3f565b979a9699509760608101359660809091013595509350505050565b600060208284031215611cbd57600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611d3a57611d3a611cc4565b604052919050565b600082601f830112611d5357600080fd5b813567ffffffffffffffff811115611d6d57611d6d611cc4565b611d9e60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611cf3565b818152846020838601011115611db357600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215611de657600080fd5b611def85611b16565b9350611dfd60208601611b16565b925060408501359150606085013567ffffffffffffffff811115611e2057600080fd5b611e2c87828801611d42565b91505092959194509250565b60008060408385031215611e4b57600080fd5b82359150611e5b60208401611b16565b90509250929050565b60008083601f840112611e7657600080fd5b50813567ffffffffffffffff811115611e8e57600080fd5b6020830191508360208260051b8501011115611b8157600080fd5b600080600080600080600080600060c08a8c031215611ec757600080fd5b893567ffffffffffffffff80821115611edf57600080fd5b611eeb8d838e01611e64565b909b50995060208c0135915080821115611f0457600080fd5b611f108d838e01611e64565b909950975060408c0135915080821115611f2957600080fd5b50611f368c828d01611e64565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b60008060008060008060008060a0898b031215611f7757600080fd5b883567ffffffffffffffff80821115611f8f57600080fd5b611f9b8c838d01611e64565b909a50985060208b0135915080821115611fb457600080fd5b611fc08c838d01611e64565b909850965060408b0135915080821115611fd957600080fd5b50611fe68b828c01611e64565b999c989b509699959896976060870135966080013595509350505050565b600082601f83011261201557600080fd5b8135602067ffffffffffffffff82111561203157612031611cc4565b8160051b612040828201611cf3565b928352848101820192828101908785111561205a57600080fd5b83870192505b8483101561207957823582529183019190830190612060565b979650505050505050565b600080600080600060a0868803121561209c57600080fd5b6120a586611b16565b94506120b360208701611b16565b9350604086013567ffffffffffffffff808211156120d057600080fd5b6120dc89838a01612004565b945060608801359150808211156120f257600080fd5b6120fe89838a01612004565b9350608088013591508082111561211457600080fd5b5061212188828901611d42565b9150509295509295909350565b600080600080600060a0868803121561214657600080fd5b61214f86611b16565b945061215d60208701611b16565b93506040860135925060608601359150608086013567ffffffffffffffff81111561218757600080fd5b61212188828901611d42565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015260a06040820152600061221260a083018688612193565b60608301949094525060800152949350505050565b73ffffffffffffffffffffffffffffffffffffffff8516815283602082015260606040820152600061225d606083018486612193565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000602082840312156122a857600080fd5b6108d382611b16565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122e657600080fd5b83018035915067ffffffffffffffff82111561230157600080fd5b602001915036819003821315611b8157600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361237657612376612316565b5060010190565b81835260006020808501808196508560051b810191508460005b8781101561242057828403895281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18836030181126123d657600080fd5b8701858101903567ffffffffffffffff8111156123f257600080fd5b80360382131561240157600080fd5b61240c868284612193565b9a87019a9550505090840190600101612397565b5091979650505050505050565b60a0808252810188905260008960c08301825b8b81101561247b5773ffffffffffffffffffffffffffffffffffffffff61246684611b16565b16825260209283019290910190600101612440565b5083810360208501528881527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8911156124b457600080fd5b8860051b9150818a602083013701828103602090810160408501526124dc908201878961237d565b60608401959095525050608001529695505050505050565b808201808211156107b6576107b6612316565b60005b8381101561252257818101518382015260200161250a565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612563816017850160208801612507565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516125a0816028840160208801612507565b01602801949350505050565b60208152600082518060208401526125cb816040850160208701612507565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b8183823760009101908152919050565b80820281158282048414176107b6576107b6612316565b60008161263357612633612316565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019056fea264697066735822122003c3eef4634d81e2410ca7e702b4a96a759166b68924f7537f4a2bd3fc769e2f64736f6c634300081100335f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63fd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783";
const isSuperArgs = (xs) => xs.length > 1;
class TimelockController__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(minDelay, proposers, executors, admin, overrides) {
        return super.deploy(minDelay, proposers, executors, admin, overrides || {});
    }
    getDeployTransaction(minDelay, proposers, executors, admin, overrides) {
        return super.getDeployTransaction(minDelay, proposers, executors, admin, overrides || {});
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
exports.TimelockController__factory = TimelockController__factory;
Object.defineProperty(TimelockController__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(TimelockController__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=TimelockController__factory.js.map