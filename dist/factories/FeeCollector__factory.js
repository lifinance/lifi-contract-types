"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeCollector__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_owner",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "batchWithdrawIntegratorFees",
        inputs: [
            {
                name: "tokenAddresses",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "batchWithdrawLifiFees",
        inputs: [
            {
                name: "tokenAddresses",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "cancelOwnershipTransfer",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "collectNativeFees",
        inputs: [
            {
                name: "integratorFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "lifiFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "integratorAddress",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "collectTokenFees",
        inputs: [
            {
                name: "tokenAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "integratorFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "lifiFee",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "integratorAddress",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "confirmOwnershipTransfer",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "getLifiTokenBalance",
        inputs: [
            {
                name: "tokenAddress",
                type: "address",
                internalType: "address",
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
        name: "getTokenBalance",
        inputs: [
            {
                name: "integratorAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "tokenAddress",
                type: "address",
                internalType: "address",
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
        name: "owner",
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
        name: "pendingOwner",
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
        name: "transferOwnership",
        inputs: [
            {
                name: "_newOwner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "withdrawIntegratorFees",
        inputs: [
            {
                name: "tokenAddress",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "withdrawLifiFees",
        inputs: [
            {
                name: "tokenAddress",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "FeesCollected",
        inputs: [
            {
                name: "_token",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "_integrator",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "_integratorFee",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "_lifiFee",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "FeesWithdrawn",
        inputs: [
            {
                name: "_token",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "_to",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "_amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "LiFiFeesWithdrawn",
        inputs: [
            {
                name: "_token",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "_to",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "_amount",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferRequested",
        inputs: [
            {
                name: "_from",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "_to",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                name: "previousOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "InsufficientBalance",
        inputs: [
            {
                name: "required",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "balance",
                type: "uint256",
                internalType: "uint256",
            },
        ],
    },
    {
        type: "error",
        name: "InvalidAmount",
        inputs: [],
    },
    {
        type: "error",
        name: "NativeAssetTransferFailed",
        inputs: [],
    },
    {
        type: "error",
        name: "NewOwnerMustNotBeSelf",
        inputs: [],
    },
    {
        type: "error",
        name: "NoNullOwner",
        inputs: [],
    },
    {
        type: "error",
        name: "NoPendingOwnershipTransfer",
        inputs: [],
    },
    {
        type: "error",
        name: "NoTransferToNullAddress",
        inputs: [],
    },
    {
        type: "error",
        name: "NotEnoughNativeForFees",
        inputs: [],
    },
    {
        type: "error",
        name: "NotPendingOwner",
        inputs: [],
    },
    {
        type: "error",
        name: "NullAddrIsNotAnERC20Token",
        inputs: [],
    },
    {
        type: "error",
        name: "TransferFailure",
        inputs: [],
    },
    {
        type: "error",
        name: "UnAuthorized",
        inputs: [],
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50604051611cc5380380611cc583398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b611c32806100936000396000f3fe6080604052600436106100d25760003560e01c8063bd0b380b1161007f578063e30c397811610059578063e30c39781461023e578063e5d647661461026b578063eedd56e11461028b578063f2fde38b146102ab57600080fd5b8063bd0b380b146101eb578063c489744b1461020b578063e0cbc5f21461022b57600080fd5b806364bc5be1116100b057806364bc5be1146101645780637200b829146101845780638da5cb5b1461019957600080fd5b80630fe97f70146100d757806323452b9c1461012d578063461ad4f514610144575b600080fd5b3480156100e357600080fd5b5061011a6100f23660046118ca565b73ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b6040519081526020015b60405180910390f35b34801561013957600080fd5b506101426102cb565b005b34801561015057600080fd5b5061014261015f3660046118ca565b610395565b34801561017057600080fd5b5061014261017f36600461191b565b61049b565b34801561019057600080fd5b50610142610665565b3480156101a557600080fd5b506000546101c69073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610124565b3480156101f757600080fd5b506101426102063660046118ca565b61074b565b34801561021757600080fd5b5061011a6102263660046119fe565b61080f565b610142610239366004611a31565b610849565b34801561024a57600080fd5b506001546101c69073ffffffffffffffffffffffffffffffffffffffff1681565b34801561027757600080fd5b5061014261028636600461191b565b610a0f565b34801561029757600080fd5b506101426102a6366004611a66565b610b99565b3480156102b757600080fd5b506101426102c63660046118ca565b610c82565b60005473ffffffffffffffffffffffffffffffffffffffff16331461031c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661036b576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103e6576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604081205490819003610418575050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260036020526040812055610449823383610de0565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc906020015b60405180910390a35050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146104ec576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516000805b8281101561065f576003600085838151811061051057610510611aac565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915060006003600086848151811061056d5761056d611aac565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506105d78482815181106105c8576105c8611aac565b60200260200101513384610de0565b3373ffffffffffffffffffffffffffffffffffffffff1684828151811061060057610600611aac565b602002602001015173ffffffffffffffffffffffffffffffffffffffff167fe0ac2a6b74759312758ae3b784411c8e2f3b8bd81fecff40b906d69030af4bfc8460405161064f91815260200190565b60405180910390a36001016104f2565b50505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146106b7576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b33600090815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915281205490819003610788575050565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120556107c590839083610de0565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa89060200161048f565b73ffffffffffffffffffffffffffffffffffffffff8083166000908152600260209081526040808320938516835292905220545b92915050565b6108538284611b0a565b34101561088c576040517f840a2adf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166000908152600260209081526040808320838052909152812080548592906108cc908490611b0a565b9091555050600080805260036020527f3617319a054d772f909f7c479a2cebe5066e836a939412e32403c99029b92eff805484929061090c908490611b0a565b909155506000905061091e8385611b0a565b6109289034611b1d565b905080156109b457604051600090339083908381818185875af1925050503d8060008114610972576040519150601f19603f3d011682016040523d82523d6000602084013e610977565b606091505b50509050806109b2576040517ff7e6817a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b604080518581526020810185905273ffffffffffffffffffffffffffffffffffffffff8416916000917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea91015b60405180910390a350505050565b80516000805b8281101561065f573360009081526002602052604081208551909190869084908110610a4357610a43611aac565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915081600014610b915733600090815260026020526040812085518290879085908110610ab557610ab5611aac565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b108482815181106105c8576105c8611aac565b3373ffffffffffffffffffffffffffffffffffffffff16848281518110610b3957610b39611aac565b602002602001015173ffffffffffffffffffffffffffffffffffffffff167f5e110f8bc8a20b65dcc87f224bdf1cc039346e267118bae2739847f07321ffa884604051610b8891815260200190565b60405180910390a35b600101610a15565b610bac84610ba78486611b0a565b610e16565b73ffffffffffffffffffffffffffffffffffffffff808216600090815260026020908152604080832093881683529290529081208054859290610bf0908490611b0a565b909155505073ffffffffffffffffffffffffffffffffffffffff841660009081526003602052604081208054849290610c2a908490611b0a565b9091555050604080518481526020810184905273ffffffffffffffffffffffffffffffffffffffff80841692908716917f28a87b6059180e46de5fb9ab35eb043e8fe00ab45afcc7789e3934ecbbcde3ea9101610a01565b60005473ffffffffffffffffffffffffffffffffffffffff163314610cd3576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610d20576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610d6f576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b73ffffffffffffffffffffffffffffffffffffffff831615610e0c57610e07838383610f91565b505050565b610e07828261110d565b80600003610e50576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ea95780341015610ea5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610f16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3a9190611b30565b905081811015610f85576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b610e0783333085611237565b73ffffffffffffffffffffffffffffffffffffffff8316610fde576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661102b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611098573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110bc9190611b30565b905080821115611102576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610f7c565b61065f848484611451565b73ffffffffffffffffffffffffffffffffffffffff821661115a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561119d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610f7c565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146111f7576040519150601f19603f3d011682016040523d82523d6000602084013e6111fc565b606091505b5050905080610e07576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611284576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166112d1576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611342573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113669190611b30565b905061137482868686611525565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156113e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114089190611b30565b6114129190611b1d565b14611449576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610e079084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611583565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261065f9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016114a3565b60006115e5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166116929092919063ffffffff16565b90508051600014806116065750808060200190518101906116069190611b49565b610e07576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610f7c565b60606116a184846000856116a9565b949350505050565b60608247101561173b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610f7c565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516117649190611b8f565b60006040518083038185875af1925050503d80600081146117a1576040519150601f19603f3d011682016040523d82523d6000602084013e6117a6565b606091505b50915091506117b7878383876117c2565b979650505050505050565b606083156118585782516000036118515773ffffffffffffffffffffffffffffffffffffffff85163b611851576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610f7c565b50816116a1565b6116a1838381511561186d5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7c9190611bab565b803573ffffffffffffffffffffffffffffffffffffffff811681146118c557600080fd5b919050565b6000602082840312156118dc57600080fd5b6118e5826118a1565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602080838503121561192e57600080fd5b823567ffffffffffffffff8082111561194657600080fd5b818501915085601f83011261195a57600080fd5b81358181111561196c5761196c6118ec565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f830116810181811085821117156119af576119af6118ec565b6040529182528482019250838101850191888311156119cd57600080fd5b938501935b828510156119f2576119e3856118a1565b845293850193928501926119d2565b98975050505050505050565b60008060408385031215611a1157600080fd5b611a1a836118a1565b9150611a28602084016118a1565b90509250929050565b600080600060608486031215611a4657600080fd5b8335925060208401359150611a5d604085016118a1565b90509250925092565b60008060008060808587031215611a7c57600080fd5b611a85856118a1565b93506020850135925060408501359150611aa1606086016118a1565b905092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561084357610843611adb565b8181038181111561084357610843611adb565b600060208284031215611b4257600080fd5b5051919050565b600060208284031215611b5b57600080fd5b815180151581146118e557600080fd5b60005b83811015611b86578181015183820152602001611b6e565b50506000910152565b60008251611ba1818460208701611b6b565b9190910192915050565b6020815260008251806020840152611bca816040850160208701611b6b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220550a141d8eba95bbfe9ed2d910ac37b08e702324a6f46718b07d1cf501eac46464736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var FeeCollector__factory = /** @class */ (function (_super) {
    __extends(FeeCollector__factory, _super);
    function FeeCollector__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    FeeCollector__factory.prototype.deploy = function (_owner, overrides) {
        return _super.prototype.deploy.call(this, _owner, overrides || {});
    };
    FeeCollector__factory.prototype.getDeployTransaction = function (_owner, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _owner, overrides || {});
    };
    FeeCollector__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    FeeCollector__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    FeeCollector__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    FeeCollector__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    FeeCollector__factory.bytecode = _bytecode;
    FeeCollector__factory.abi = _abi;
    return FeeCollector__factory;
}(ethers_1.ContractFactory));
exports.FeeCollector__factory = FeeCollector__factory;
