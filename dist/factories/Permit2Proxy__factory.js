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
exports.Permit2Proxy__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_lifiDiamond",
                type: "address",
                internalType: "address",
            },
            {
                name: "_permit2",
                type: "address",
                internalType: "contract ISignatureTransfer",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "LIFI_DIAMOND",
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
        name: "PERMIT2",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract ISignatureTransfer",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "PERMIT_WITH_WITNESS_TYPEHASH",
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
        name: "WITNESS_TYPEHASH",
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
        name: "WITNESS_TYPE_STRING",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "callDiamondWithEIP2612Signature",
        inputs: [
            {
                name: "tokenAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "deadline",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "v",
                type: "uint8",
                internalType: "uint8",
            },
            {
                name: "r",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "s",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "diamondCalldata",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "callDiamondWithPermit2",
        inputs: [
            {
                name: "_diamondCalldata",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_permit",
                type: "tuple",
                internalType: "struct ISignatureTransfer.PermitTransferFrom",
                components: [
                    {
                        name: "permitted",
                        type: "tuple",
                        internalType: "struct ISignatureTransfer.TokenPermissions",
                        components: [
                            {
                                name: "token",
                                type: "address",
                                internalType: "address",
                            },
                            {
                                name: "amount",
                                type: "uint256",
                                internalType: "uint256",
                            },
                        ],
                    },
                    {
                        name: "nonce",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "deadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "_signature",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "callDiamondWithPermit2Witness",
        inputs: [
            {
                name: "_diamondCalldata",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_signer",
                type: "address",
                internalType: "address",
            },
            {
                name: "_permit",
                type: "tuple",
                internalType: "struct ISignatureTransfer.PermitTransferFrom",
                components: [
                    {
                        name: "permitted",
                        type: "tuple",
                        internalType: "struct ISignatureTransfer.TokenPermissions",
                        components: [
                            {
                                name: "token",
                                type: "address",
                                internalType: "address",
                            },
                            {
                                name: "amount",
                                type: "uint256",
                                internalType: "uint256",
                            },
                        ],
                    },
                    {
                        name: "nonce",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "deadline",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
            {
                name: "_signature",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "diamondWhitelist",
        inputs: [
            {
                name: "",
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
        name: "getPermit2MsgHash",
        inputs: [
            {
                name: "_diamondCalldata",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_assetId",
                type: "address",
                internalType: "address",
            },
            {
                name: "_amount",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_nonce",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "_deadline",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "msgHash",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "nextNonce",
        inputs: [
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [
            {
                name: "nonce",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "nextNonceAfter",
        inputs: [
            {
                name: "owner",
                type: "address",
                internalType: "address",
            },
            {
                name: "start",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "nonce",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "error",
        name: "CallToDiamondFailed",
        inputs: [
            {
                name: "",
                type: "bytes",
                internalType: "bytes",
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
        name: "NoTransferToNullAddress",
        inputs: [],
    },
    {
        type: "error",
        name: "NullAddrIsNotAValidSpender",
        inputs: [],
    },
    {
        type: "error",
        name: "NullAddrIsNotAnERC20Token",
        inputs: [],
    },
];
var _bytecode = "0x60e06040523480156200001157600080fd5b5060405162001fc438038062001fc48339810160408190526200003491620000ca565b6001600160a01b03808316608052811660a0908152604080519182019052606480825262001f6060208301396040518060c001604052806091815260200162001ecf609191396040516020016200008d9291906200013b565b60408051601f19818403018152919052805160209091012060c052506200015c9050565b6001600160a01b0381168114620000c757600080fd5b50565b60008060408385031215620000de57600080fd5b8251620000eb81620000b1565b6020840151909250620000fe81620000b1565b809150509250929050565b6000815160005b818110156200012c576020818501810151868301520162000110565b50600093019283525090919050565b6000620001546200014d838662000109565b8462000109565b949350505050565b60805160a05160c051611cf7620001d86000396000818161029c015261058701526000818161026801528181610323015281816104f40152818161072c0152610ca601526000818160f3015281816103a40152818161048b0152818161065a0152818161081e015281816109b60152610b670152611cf76000f3fe6080604052600436106100c75760003560e01c80634561136e116100745780636afdd8501161004e5780636afdd85014610256578063aeef37de1461028a578063d7a08473146102be57600080fd5b80634561136e146101e357806356ee2b50146101f65780635ebf8b7d1461023657600080fd5b8063156e2152116100a5578063156e21521461016d5780631608b8031461018f5780632c03ae6a146101af57600080fd5b80630193b9fc146100cc578063020a1f7d146100e15780630cd55abf1461013f575b600080fd5b6100df6100da366004611692565b6102d1565b005b3480156100ed57600080fd5b506101157f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561014b57600080fd5b5061015f61015a366004611740565b610413565b604051908152602001610136565b34801561017957600080fd5b50610182610427565b60405161013691906117c9565b34801561019b57600080fd5b5061015f6101aa3660046117dc565b610443565b3480156101bb57600080fd5b5061015f7f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd81565b6100df6101f136600461184c565b61064b565b34801561020257600080fd5b50610226610211366004611740565b60006020819052908152604090205460ff1681565b6040519015158152602001610136565b34801561024257600080fd5b5061015f6102513660046118e1565b610890565b34801561026257600080fd5b506101157f000000000000000000000000000000000000000000000000000000000000000081565b34801561029657600080fd5b5061015f7f000000000000000000000000000000000000000000000000000000000000000081565b6100df6102cc36600461190b565b6108fa565b6040805180820182523081526020808601359082015290517f30f28b7a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016916330f28b7a9161035e918791339088908890600401611a2a565b600060405180830381600087803b15801561037857600080fd5b505af115801561038c573d6000803e3d6000fd5b506103cd92506103a29150506020850185611740565b7f00000000000000000000000000000000000000000000000000000000000000006020860135610a1a565b61040c85858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610b6292505050565b5050505050565b600061042182600080610c34565b92915050565b6040518060c0016040528060918152602001611c316091913981565b6040805180820190915273ffffffffffffffffffffffffffffffffffffffff85168152602081018490526000908161047a82610db4565b9050600060405180604001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020018b8b6040516104d5929190611a9b565b6040518091039020815250905060006104ed82610e34565b905061063c7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633644e5156040518163ffffffff1660e01b8152600401602060405180830381865afa15801561055d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105819190611aab565b604080517f0000000000000000000000000000000000000000000000000000000000000000602080830191909152818301889052306060830152608082018c905260a082018b905260c08083018790528351808403909101815260e0830184528051908201207f19010000000000000000000000000000000000000000000000000000000000006101008401526101028301949094526101228083019490945282518083039094018452610142909101909152815191012090565b9b9a5050505050505050505050565b600060405180604001604052807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16815260200188886040516106a4929190611a9b565b6040518091039020815250905060007f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd82604051602001610712929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b6040516020818303038152906040528051906020012090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663137c29fe8660405180604001604052803073ffffffffffffffffffffffffffffffffffffffff168152602001896000016020013581525089856040518060c0016040528060918152602001611c31609191398a8a6040518863ffffffff1660e01b81526004016107d89796959493929190611ac4565b600060405180830381600087803b1580156107f257600080fd5b505af1158015610806573d6000803e3d6000fd5b50610847925061081c9150506020870187611740565b7f00000000000000000000000000000000000000000000000000000000000000006020880135610a1a565b61088688888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610b6292505050565b5050505050505050565b6000600882901c827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0160ff8216016108d857816108cc81611b82565b925050600090506108e6565b806108e281611bc0565b9150505b6108f1858383610c34565b95945050505050565b6040517fd505accf000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018890526064810187905260ff8616608482015260a4810185905260c4810184905273ffffffffffffffffffffffffffffffffffffffff89169063d505accf9060e401600060405180830381600087803b15801561098c57600080fd5b505af11580156109a0573d6000803e3d6000fd5b505050506109b08833308a610e95565b6109db887f000000000000000000000000000000000000000000000000000000000000000089610a1a565b61088682828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610b6292505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a3a57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610a87576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610afc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b209190611aab565b1015610b5d57610b32838360006110af565b610b5d83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6110af565b505050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163484604051610bab9190611bdf565b60006040518083038185875af1925050503d8060008114610be8576040519150601f19603f3d011682016040523d82523d6000602084013e610bed565b606091505b509150915081610b5d57806040517f0e971f12000000000000000000000000000000000000000000000000000000008152600401610c2b91906117c9565b60405180910390fd5b60005b6040517f4fe02b4400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301527effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff851660248301526000917f000000000000000000000000000000000000000000000000000000000000000090911690634fe02b4490604401602060405180830381865afa158015610cef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d139190611aab565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8103610d5157610d4584611b82565b93506000925050610c37565b60ff831615610d605760ff83161c5b80600116600103610d7e5760011c610d7783611bc0565b9250610d60565b505060ff81167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00600884901b16175b9392505050565b8051602080830151604051600093610e17937f618358ac3db8dc274f0cd8829da7e234bd48cd73c4a740aede1adec9846d06a19391920192835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001209050919050565b60007f02a39cd37978343aced31673756afe3d4c89631c9f974dd8ef54c7065bd8e3cd82604051602001610e17929190918252805173ffffffffffffffffffffffffffffffffffffffff166020808401919091520151604082015260600190565b73ffffffffffffffffffffffffffffffffffffffff8416610ee2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f2f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610fa0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc49190611aab565b9050610fd2828686866112af565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611042573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110669190611aab565b6110709190611bfb565b146110a7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b80158061114f57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611129573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114d9190611aab565b155b6111db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610c2b565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610b5d9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611313565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261130d9085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161122d565b50505050565b6000611375826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166114229092919063ffffffff16565b90508051600014806113965750808060200190518101906113969190611c0e565b610b5d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610c2b565b60606114318484600085611439565b949350505050565b6060824710156114cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610c2b565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516114f49190611bdf565b60006040518083038185875af1925050503d8060008114611531576040519150601f19603f3d011682016040523d82523d6000602084013e611536565b606091505b509150915061154787838387611552565b979650505050505050565b606083156115e85782516000036115e15773ffffffffffffffffffffffffffffffffffffffff85163b6115e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610c2b565b5081611431565b61143183838151156115fd5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2b91906117c9565b60008083601f84011261164357600080fd5b50813567ffffffffffffffff81111561165b57600080fd5b60208301915083602082850101111561167357600080fd5b9250929050565b60006080828403121561168c57600080fd5b50919050565b600080600080600060c086880312156116aa57600080fd5b853567ffffffffffffffff808211156116c257600080fd5b6116ce89838a01611631565b90975095508591506116e38960208a0161167a565b945060a08801359150808211156116f957600080fd5b5061170688828901611631565b969995985093965092949392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461173b57600080fd5b919050565b60006020828403121561175257600080fd5b610dad82611717565b60005b8381101561177657818101518382015260200161175e565b50506000910152565b6000815180845261179781602086016020860161175b565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610dad602083018461177f565b60008060008060008060a087890312156117f557600080fd5b863567ffffffffffffffff81111561180c57600080fd5b61181889828a01611631565b909750955061182b905060208801611717565b93506040870135925060608701359150608087013590509295509295509295565b60008060008060008060e0878903121561186557600080fd5b863567ffffffffffffffff8082111561187d57600080fd5b6118898a838b01611631565b909850965086915061189d60208a01611717565b95506118ac8a60408b0161167a565b945060c08901359150808211156118c257600080fd5b506118cf89828a01611631565b979a9699509497509295939492505050565b600080604083850312156118f457600080fd5b6118fd83611717565b946020939093013593505050565b60008060008060008060008060e0898b03121561192757600080fd5b61193089611717565b97506020890135965060408901359550606089013560ff8116811461195457600080fd5b94506080890135935060a0890135925060c089013567ffffffffffffffff81111561197e57600080fd5b61198a8b828c01611631565b999c989b5096995094979396929594505050565b73ffffffffffffffffffffffffffffffffffffffff6119bc82611717565b1682526020810135602083015260408101356040830152606081013560608301525050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6000610100611a39838961199e565b865173ffffffffffffffffffffffffffffffffffffffff166080840152602087015160a084015273ffffffffffffffffffffffffffffffffffffffff861660c08401528060e0840152611a8f81840185876119e1565b98975050505050505050565b8183823760009101908152919050565b600060208284031215611abd57600080fd5b5051919050565b6000610140611ad3838b61199e565b885173ffffffffffffffffffffffffffffffffffffffff166080840152602089015160a084015273ffffffffffffffffffffffffffffffffffffffff881660c08401528660e084015280610100840152611b2f8184018761177f565b9050828103610120840152611b458185876119e1565b9a9950505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808316818103611bb657611bb6611b53565b6001019392505050565b600060ff821660ff8103611bd657611bd6611b53565b60010192915050565b60008251611bf181846020870161175b565b9190910192915050565b8181038181111561042157610421611b53565b600060208284031215611c2057600080fd5b81518015158114610dad57600080fdfe4c49464943616c6c207769746e657373294c49464943616c6c286164647265737320746f6b656e52656365697665722c61646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e7429a2646970667358221220a43e7d7618fb871318d554e0f16eeb3dcc4b5eb25dcfd41bd6ddc4aa75bf163164736f6c634300081100334c49464943616c6c207769746e657373294c49464943616c6c286164647265737320746f6b656e52656365697665722c61646472657373206469616d6f6e64416464726573732c62797465733332206469616d6f6e6443616c6c646174614861736829546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e74295065726d69745769746e6573735472616e7366657246726f6d28546f6b656e5065726d697373696f6e73207065726d69747465642c61646472657373207370656e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e652c";
var isSuperArgs = function (xs) { return xs.length > 1; };
var Permit2Proxy__factory = /** @class */ (function (_super) {
    __extends(Permit2Proxy__factory, _super);
    function Permit2Proxy__factory() {
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
    Permit2Proxy__factory.prototype.deploy = function (_lifiDiamond, _permit2, overrides) {
        return _super.prototype.deploy.call(this, _lifiDiamond, _permit2, overrides || {});
    };
    Permit2Proxy__factory.prototype.getDeployTransaction = function (_lifiDiamond, _permit2, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _lifiDiamond, _permit2, overrides || {});
    };
    Permit2Proxy__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Permit2Proxy__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Permit2Proxy__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Permit2Proxy__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Permit2Proxy__factory.bytecode = _bytecode;
    Permit2Proxy__factory.abi = _abi;
    return Permit2Proxy__factory;
}(ethers_1.ContractFactory));
exports.Permit2Proxy__factory = Permit2Proxy__factory;
