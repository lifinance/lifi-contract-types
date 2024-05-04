import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Permit2Proxy, Permit2ProxyInterface } from "../Permit2Proxy";
declare type Permit2ProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Permit2Proxy__factory extends ContractFactory {
    constructor(...args: Permit2ProxyConstructorParams);
    deploy(permit2Address: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Permit2Proxy>;
    getDeployTransaction(permit2Address: PromiseOrValue<string>, owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Permit2Proxy;
    connect(signer: Signer): Permit2Proxy__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162001f7d38038062001f7d833981016040819052620000349162000086565b600080546001600160a01b039283166001600160a01b03199182161790915560028054939092169216919091179055620000be565b80516001600160a01b03811681146200008157600080fd5b919050565b600080604083850312156200009a57600080fd5b620000a58362000069565b9150620000b56020840162000069565b90509250929050565b611eaf80620000ce6000396000f3fe6080604052600436106100bc5760003560e01c806356ee2b5011610074578063ad6e1f431161004e578063ad6e1f43146101f7578063e30c39781461020a578063f2fde38b1461023757600080fd5b806356ee2b50146101755780637200b829146101b55780638da5cb5b146101ca57600080fd5b80632ac25eb6116100a55780632ac25eb61461012f57806333320de314610142578063509bcb751461016257600080fd5b806312261ee7146100c157806323452b9c14610118575b600080fd5b3480156100cd57600080fd5b506002546100ee9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561012457600080fd5b5061012d610257565b005b61012d61013d36600461136d565b610321565b34801561014e57600080fd5b5061012d61015d36600461146f565b61044a565b61012d610170366004611677565b610597565b34801561018157600080fd5b506101a561019036600461173c565b60036020526000908152604090205460ff1681565b604051901515815260200161010f565b3480156101c157600080fd5b5061012d6106c4565b3480156101d657600080fd5b506000546100ee9073ffffffffffffffffffffffffffffffffffffffff1681565b61012d610205366004611760565b6107aa565b34801561021657600080fd5b506001546100ee9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561024357600080fd5b5061012d61025236600461173c565b6109b6565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102a8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166102f7576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6040517fd505accf00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a81166004830152306024830152604482018a90526064820189905260ff8816608483015260a4820187905260c482018690528b169063d505accf9060e401600060405180830381600087803b1580156103b557600080fd5b505af11580156103c9573d6000803e3d6000fd5b508c92506103f291505073ffffffffffffffffffffffffffffffffffffffff82168b308c610b14565b6103fd81858b610bf6565b61043d8484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610d3e92505050565b5050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461049b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b83811015610553578282828181106104b8576104b86118f3565b90506020020160208101906104cd9190611930565b600360008787858181106104e3576104e36118f3565b90506020020160208101906104f8919061173c565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691151591909117905560010161049e565b507faa9b4ef90f4ce69eff58dfa82ee849c9d5063df771c1320a024b5a9fb672254384848484604051610589949392919061194d565b60405180910390a150505050565b6000848060200190518101906105ad9190611a0e565b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663137c29fe886040518060400160405280856000015173ffffffffffffffffffffffffffffffffffffffff1681526020018a8152508789805190602001206040518060c0016040528060898152602001611df16089913989896040518863ffffffff1660e01b81526004016106639796959493929190611b6f565b600060405180830381600087803b15801561067d57600080fd5b505af1158015610691573d6000803e3d6000fd5b505088515160208401516106a9935090915088610bf6565b6106bb81602001518260400151610d3e565b50505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610716576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6000848060200190518101906107c09190611a0e565b905060008667ffffffffffffffff8111156107dd576107dd6114db565b60405190808252806020026020018201604052801561082257816020015b60408051808201909152600080825260208201528152602001906001900390816107fb5790505b50905060005b878110156108e05760405180604001604052803073ffffffffffffffffffffffffffffffffffffffff1681526020018a8a84818110610869576108696118f3565b90506020020135815250828281518110610885576108856118f3565b60200260200101819052506108d88a6000015182815181106108a9576108a96118f3565b60200260200101516000015184602001518b8b858181106108cc576108cc6118f3565b90506020020135610bf6565b600101610828565b50600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fe8ec1a78a83888a805190602001206040518060c0016040528060898152602001611df1608991398a8a6040518863ffffffff1660e01b81526004016109679796959493929190611c9e565b600060405180830381600087803b15801561098157600080fd5b505af1158015610995573d6000803e3d6000fd5b505050506109ab82602001518360400151610d3e565b505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a07576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610a54576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610aa3576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610bf09085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610e4f565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c1657505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c63576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610cd8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cfc9190611d8b565b1015610d3957610d0e83836000610f5e565b610d3983837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610f5e565b505050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526003602052604090205460ff16610d9d576040517fb21c96b900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808373ffffffffffffffffffffffffffffffffffffffff163484604051610dc69190611da4565b60006040518083038185875af1925050503d8060008114610e03576040519150601f19603f3d011682016040523d82523d6000602084013e610e08565b606091505b509150915081610bf057806040517f0e971f12000000000000000000000000000000000000000000000000000000008152600401610e469190611dc0565b60405180910390fd5b6000610eb1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166110e09092919063ffffffff16565b9050805160001480610ed2575080806020019051810190610ed29190611dd3565b610d39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610e46565b801580610ffe57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610fd8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ffc9190611d8b565b155b61108a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610e46565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610d399084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610b6e565b60606110ef84846000856110f7565b949350505050565b606082471015611189576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610e46565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516111b29190611da4565b60006040518083038185875af1925050503d80600081146111ef576040519150601f19603f3d011682016040523d82523d6000602084013e6111f4565b606091505b509150915061120587838387611210565b979650505050505050565b606083156112a657825160000361129f5773ffffffffffffffffffffffffffffffffffffffff85163b61129f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610e46565b50816110ef565b6110ef83838151156112bb5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e469190611dc0565b73ffffffffffffffffffffffffffffffffffffffff8116811461131157600080fd5b50565b803561131f816112ef565b919050565b60008083601f84011261133657600080fd5b50813567ffffffffffffffff81111561134e57600080fd5b60208301915083602082850101111561136657600080fd5b9250929050565b6000806000806000806000806000806101208b8d03121561138d57600080fd5b8a35611398816112ef565b995060208b01356113a8816112ef565b985060408b0135975060608b0135965060808b013560ff811681146113cc57600080fd5b955060a08b0135945060c08b013593506113e860e08c01611314565b92506101008b013567ffffffffffffffff81111561140557600080fd5b6114118d828e01611324565b915080935050809150509295989b9194979a5092959850565b60008083601f84011261143c57600080fd5b50813567ffffffffffffffff81111561145457600080fd5b6020830191508360208260051b850101111561136657600080fd5b6000806000806040858703121561148557600080fd5b843567ffffffffffffffff8082111561149d57600080fd5b6114a98883890161142a565b909650945060208701359150808211156114c257600080fd5b506114cf8782880161142a565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561152d5761152d6114db565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561157a5761157a6114db565b604052919050565b60006040828403121561159457600080fd5b6040516040810181811067ffffffffffffffff821117156115b7576115b76114db565b60405290508082356115c8816112ef565b8152602092830135920191909152919050565b600067ffffffffffffffff8211156115f5576115f56114db565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261163257600080fd5b8135611645611640826115db565b611533565b81815284602083860101111561165a57600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060008086880361010081121561169257600080fd5b60808112156116a057600080fd5b506116a961150a565b6116b38989611582565b8152604088810135602083015260608901359082015295506080870135945060a087013567ffffffffffffffff808211156116ed57600080fd5b6116f98a838b01611621565b955061170760c08a01611314565b945060e089013591508082111561171d57600080fd5b5061172a89828a01611324565b979a9699509497509295939492505050565b60006020828403121561174e57600080fd5b8135611759816112ef565b9392505050565b600080600080600080600060a0888a03121561177b57600080fd5b67ffffffffffffffff808935111561179257600080fd5b606089358a018b0312156117a557600080fd5b6117ad61150a565b818a358b013511156117be57600080fd5b89358a01803501601f81018c136117d457600080fd5b82813511156117e5576117e56114db565b6117f56020823560051b01611533565b81358082526020808301929160061b8401018e101561181357600080fd5b602083015b6020843560061b850101811015611843576118338f82611582565b8352602090920191604001611818565b5080845250505060208a358b010135602082015260408a358b0101356040820152809850508060208a0135111561187957600080fd5b6118898a60208b01358b0161142a565b9097509550604089013581101561189f57600080fd5b6118af8a60408b01358b01611621565b94506118bd60608a01611314565b93508060808a013511156118d057600080fd5b506118e18960808a01358a01611324565b979a9699509497509295919491925050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b801515811461131157600080fd5b60006020828403121561194257600080fd5b813561175981611922565b6040808252810184905260008560608301825b8781101561199d578235611973816112ef565b73ffffffffffffffffffffffffffffffffffffffff16825260209283019290910190600101611960565b5083810360208581019190915285825291508590820160005b868110156119dd5782356119c981611922565b1515825291830191908301906001016119b6565b5098975050505050505050565b60005b83811015611a055781810151838201526020016119ed565b50506000910152565b60006020808385031215611a2157600080fd5b825167ffffffffffffffff80821115611a3957600080fd5b9084019060608287031215611a4d57600080fd5b611a5561150a565b8251611a60816112ef565b815282840151611a6f816112ef565b81850152604083015182811115611a8557600080fd5b80840193505086601f840112611a9a57600080fd5b82519150611aaa611640836115db565b8281528785848601011115611abe57600080fd5b611acd838683018787016119ea565b60408201529695505050505050565b60008151808452611af48160208601602086016119ea565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b6000610140611b9f838b51805173ffffffffffffffffffffffffffffffffffffffff168252602090810151910152565b60208a0151604084015260408a01516060840152611be0608084018a805173ffffffffffffffffffffffffffffffffffffffff168252602090810151910152565b73ffffffffffffffffffffffffffffffffffffffff881660c08401528660e084015280610100840152611c1581840187611adc565b9050828103610120840152611c2b818587611b26565b9a9950505050505050505050565b600081518084526020808501945080840160005b83811015611c9357611c80878351805173ffffffffffffffffffffffffffffffffffffffff168252602090810151910152565b6040969096019590820190600101611c4d565b509495945050505050565b60c08152600061012082018951606060c08501528181518084526101408601915060209350838301925060005b81811015611d1157611cfe838551805173ffffffffffffffffffffffffffffffffffffffff168252602090810151910152565b9284019260409290920191600101611ccb565b5050828c015160e086015260408c015161010086015284810383860152611d38818c611c39565b92505050611d5e604084018973ffffffffffffffffffffffffffffffffffffffff169052565b8660608401528281036080840152611d768187611adc565b905082810360a0840152611c2b818587611b26565b600060208284031215611d9d57600080fd5b5051919050565b60008251611db68184602087016119ea565b9190910192915050565b6020815260006117596020830184611adc565b600060208284031215611de557600080fd5b81516117598161192256fe5769746e657373207769746e65737329546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e74295769746e657373286164647265737320746f6b656e52656365697665722c61646472657373206469616d6f6e64416464726573732c6279746573206469616d6f6e6443616c6c6461746129a26469706673582212201d923d2c473c483e86a7ea50704e41a2ce5ae24a6591856fae2023114dad976964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "permit2Address";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "callDiamondWithEIP2612Signature";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "diamondAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "diamondCalldata";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "callDiamondWithPermit2SignatureBatch";
        readonly inputs: readonly [{
            readonly name: "permit";
            readonly type: "tuple";
            readonly internalType: "struct IPermit2.PermitBatchTransferFrom";
            readonly components: readonly [{
                readonly name: "permitted";
                readonly type: "tuple[]";
                readonly internalType: "struct IPermit2.TokenPermissions[]";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "amounts";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "witnessData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "callDiamondWithPermit2SignatureSingle";
        readonly inputs: readonly [{
            readonly name: "permit";
            readonly type: "tuple";
            readonly internalType: "struct IPermit2.PermitTransferFrom";
            readonly components: readonly [{
                readonly name: "permitted";
                readonly type: "tuple";
                readonly internalType: "struct IPermit2.TokenPermissions";
                readonly components: readonly [{
                    readonly name: "token";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "amount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "witnessData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "signature";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "diamondWhitelist";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "permit2";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IPermit2";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "updateWhitelist";
        readonly inputs: readonly [{
            readonly name: "addresses";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "bool[]";
            readonly internalType: "bool[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "WhitelistUpdated";
        readonly inputs: readonly [{
            readonly name: "addresses";
            readonly type: "address[]";
            readonly indexed: false;
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "bool[]";
            readonly indexed: false;
            readonly internalType: "bool[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CallToDiamondFailed";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
    }, {
        readonly type: "error";
        readonly name: "DiamondAddressNotWhitelisted";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): Permit2ProxyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Permit2Proxy;
}
export {};
