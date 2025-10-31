import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { RelayDepositoryFacet, RelayDepositoryFacetInterface } from "../RelayDepositoryFacet";
type RelayDepositoryFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RelayDepositoryFacet__factory extends ContractFactory {
    constructor(...args: RelayDepositoryFacetConstructorParams);
    deploy(_relayDepository: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<RelayDepositoryFacet>;
    getDeployTransaction(_relayDepository: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): RelayDepositoryFacet;
    connect(signer: Signer): RelayDepositoryFacet__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405162001e0838038062001e0883398101604081905261003191610069565b6001600160a01b03811661005857604051631c49f4d160e01b815260040160405180910390fd5b6001600160a01b0316608052610099565b60006020828403121561007b57600080fd5b81516001600160a01b038116811461009257600080fd5b9392505050565b608051611d3f620000c9600039600081816073015281816106860152818161075101526107910152611d3f6000f3fe6080604052600436106100345760003560e01c8063092e8fa414610039578063a3443faa1461004e578063b94289bb14610061575b600080fd5b61004c610047366004611638565b6100be565b005b61004c61005c3660046118af565b61030a565b34801561006d57600080fd5b506100957f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a344761198a565b90506101558561199d565b60a081015173ffffffffffffffffffffffffffffffffffffffff166101a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610221576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61022a8661199d565b80610100015115610267576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102708761199d565b806101200151156102ad576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ca6102c060a08a0160808b016119a9565b8960c00135610537565b6102dc6102d68961199d565b886105ec565b5047915050818111156102fe576102fe6000846102f9858561198a565b61089f565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610385576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610396344761198a565b9050868061010001516103d5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610413576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104368160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561046d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104ab576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104e8576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104fd8a600001518b60c001518b8b336108d4565b60c08b015261050c8a886105ec565b504791505081811115610529576105296000846102f9858561198a565b505060009091555050505050565b80600003610571576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105ca57803410156105c6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6105c673ffffffffffffffffffffffffffffffffffffffff8316333084610a1b565b60006105fe60408301602084016119a9565b73ffffffffffffffffffffffffffffffffffffffff160361064b576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff166107475760c082015173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906349290c1c906106bd60408501602086016119a9565b60405160e084901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9091166004820152843560248201526044016000604051808303818588803b15801561072957600080fd5b505af115801561073d573d6000803e3d6000fd5b5050505050610864565b61077a82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610a78565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663e80179526107c660408401602085016119a9565b608085015160c086015160405160e085901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9384166004820152929091166024830152604482015283356064820152608401600060405180830381600087803b15801561084b57600080fd5b505af115801561085f573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108939190611a2f565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166108c9576108c48282610aa4565b505050565b6108c4838383610b11565b600082808203610910576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561091f60018561198a565b81811061092e5761092e611b42565b90506020028101906109409190611b71565b6109519060808101906060016119a9565b9050600061095e82610b7f565b905073ffffffffffffffffffffffffffffffffffffffff821661098857610985348261198a565b90505b60006109948888610bca565b90506109a08888610cde565b6109ad8a89898985610d4b565b6000826109b985610b7f565b6109c3919061198a565b905089811015610a0d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716610a6a57637939f4246000526004601cfd5b600060605260405250505050565b6108c48383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610f1a565b73ffffffffffffffffffffffffffffffffffffffff8216610af1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105c673ffffffffffffffffffffffffffffffffffffffff831682611049565b73ffffffffffffffffffffffffffffffffffffffff8216610b5e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108c473ffffffffffffffffffffffffffffffffffffffff84168383611065565b600073ffffffffffffffffffffffffffffffffffffffff821615610bc257610bbd73ffffffffffffffffffffffffffffffffffffffff8316306110b4565b610bc4565b475b92915050565b60608160008167ffffffffffffffff811115610be857610be861168d565b604051908082528060200260200182016040528015610c11578160200160208202803683370190505b5090506000805b83811015610cd357868682818110610c3257610c32611b42565b9050602002810190610c449190611b71565b610c559060808101906060016119a9565b9150610c6082610b7f565b838281518110610c7257610c72611b42565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610cc35734838281518110610cab57610cab611b42565b60200260200101818151610cbf919061198a565b9052505b610ccc81611baf565b9050610c18565b509095945050505050565b60005b818110156108c45736838383818110610cfc57610cfc611b42565b9050602002810190610d0e9190611b71565b9050610d2060e0820160c08301611be7565b15610d4257610d42610d3860608301604084016119a9565b8260800135610537565b50600101610ce1565b838383838260005b81811015610eff57368a8a83818110610d6e57610d6e611b42565b9050602002810190610d809190611b71565b9050610daf610d9560608301604084016119a9565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e125750610e12610dc860408301602084016119a9565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e295750610e29610dc860208301836119a9565b8015610eae5750610eae610e4060a0830183611c02565b610e4f91600491600091611c6e565b610e5891611c98565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610ee4576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610eee8c826110e9565b50610ef881611baf565b9050610d53565b5050610f0f848484846000611366565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156110435773ffffffffffffffffffffffffffffffffffffffff8316610f83576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610ff8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101c9190611ce0565b10156110435761104373ffffffffffffffffffffffffffffffffffffffff8516848361158c565b50505050565b60003860003884865af16105c65763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166110aa576390b8ec186000526004601cfd5b6000603452505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6111016110f960208301836119a9565b6017903b1190565b611137576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611177576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061118c610d9560608501604086016119a9565b61119757600061119d565b82608001355b905060006111b96111b460808601606087016119a9565b610b7f565b9050816000036111f0576111f06111d660608601604087016119a9565b6111e660408701602088016119a9565b8660800135610a78565b60008061120060208701876119a9565b73ffffffffffffffffffffffffffffffffffffffff168461122460a0890189611c02565b604051611232929190611cf9565b60006040518083038185875af1925050503d806000811461126f576040519150601f19603f3d011682016040523d82523d6000602084013e611274565b606091505b5091509150816112875761128781611616565b600061129c6111b46080890160608a016119a9565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886112cd60208a018a6119a9565b6112dd60608b0160408c016119a9565b6112ed60808c0160608d016119a9565b8b608001358987116112ff5786611309565b6113098a8861198a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b836000868261137660018261198a565b81811061138557611385611b42565b90506020028101906113979190611b71565b6113a89060808101906060016119a9565b905060008060008060008060005b8881101561157c576113c960018a61198a565b811080156113d8575088600114155b156114b4578d8d828181106113ef576113ef611b42565b90506020028101906114019190611b71565b6114129060808101906060016119a9565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146114b4578a818151811061145957611459611b42565b602002602001015161146a87610b7f565b611474919061198a565b965073ffffffffffffffffffffffffffffffffffffffff86161561149957600061149b565b895b9350838711156114b4576114b4868d6102f9878b61198a565b8d8d828181106114c6576114c6611b42565b90506020028101906114d89190611b71565b6114e99060608101906040016119a9565b94506114f485610b7f565b925073ffffffffffffffffffffffffffffffffffffffff85161561151957600061151b565b895b9150818311801561155857508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561156c5761156c858d6102f9858761198a565b61157581611baf565b90506113b6565b5050505050505050505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166110aa5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166110aa57633e3f8f736000526004601cfd5b8051602082018181fd5b60006040828403121561163257600080fd5b50919050565b6000806060838503121561164b57600080fd5b823567ffffffffffffffff81111561166257600080fd5b8301610140818603121561167557600080fd5b91506116848460208501611620565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156116e0576116e061168d565b60405290565b600082601f8301126116f757600080fd5b813567ffffffffffffffff808211156117125761171261168d565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156117585761175861168d565b8160405283815286602085880101111561177157600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146117b557600080fd5b919050565b803580151581146117b557600080fd5b600061014082840312156117dd57600080fd5b6117e56116bc565b905081358152602082013567ffffffffffffffff8082111561180657600080fd5b611812858386016116e6565b6020840152604084013591508082111561182b57600080fd5b50611838848285016116e6565b60408301525061184a60608301611791565b606082015261185b60808301611791565b608082015261186c60a08301611791565b60a082015260c082013560c082015260e082013560e08201526101006118938184016117ba565b908201526101206118a58382016117ba565b9082015292915050565b600080600080608085870312156118c557600080fd5b843567ffffffffffffffff808211156118dd57600080fd5b6118e9888389016117ca565b955060208701359150808211156118ff57600080fd5b818701915087601f83011261191357600080fd5b81358181111561192257600080fd5b8860208260051b850101111561193757600080fd5b6020830195508094505050506119508660408701611620565b905092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610bc457610bc461195b565b6000610bc436836117ca565b6000602082840312156119bb57600080fd5b6119c482611791565b9392505050565b6000815180845260005b818110156119f1576020818501810151868301820152016119d5565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152611a586101608501836119cb565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611a9383826119cb565b9250506060850151611abd608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611b308187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611ba557600080fd5b9190910192915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611be057611be061195b565b5060010190565b600060208284031215611bf957600080fd5b6119c4826117ba565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611c3757600080fd5b83018035915067ffffffffffffffff821115611c5257600080fd5b602001915036819003821315611c6757600080fd5b9250929050565b60008085851115611c7e57600080fd5b83861115611c8b57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611cd85780818660040360031b1b83161692505b505092915050565b600060208284031215611cf257600080fd5b5051919050565b818382376000910190815291905056fea264697066735822122069f2719886d3cf70f8da4326532ecbf6be71d456c670d1242e1d5b903673dc0064736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_relayDepository";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "RELAY_DEPOSITORY";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaRelayDepository";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_relayDepositoryData";
            readonly type: "tuple";
            readonly internalType: "struct RelayDepositoryFacet.RelayDepositoryData";
            readonly components: readonly [{
                readonly name: "orderId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositorAddress";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaRelayDepository";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_relayDepositoryData";
            readonly type: "tuple";
            readonly internalType: "struct RelayDepositoryFacet.RelayDepositoryData";
            readonly components: readonly [{
                readonly name: "orderId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositorAddress";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): RelayDepositoryFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RelayDepositoryFacet;
}
export {};
