import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GlacisFacet, GlacisFacetInterface } from "../GlacisFacet";
declare type GlacisFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GlacisFacet__factory extends ContractFactory {
    constructor(...args: GlacisFacetConstructorParams);
    deploy(_airlift: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GlacisFacet>;
    getDeployTransaction(_airlift: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GlacisFacet;
    connect(signer: Signer): GlacisFacet__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405162001ebd38038062001ebd83398101604081905261003191610069565b6001600160a01b038116610058576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610099565b60006020828403121561007b57600080fd5b81516001600160a01b038116811461009257600080fd5b9392505050565b608051611dfb620000c2600039600081816060015281816106ea01526107150152611dfb6000f3fe6080604052600436106100345760003560e01c8063753cbab61461003957806382a3279b1461004e578063e10c04c1146100ab575b600080fd5b61004c610047366004611968565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b93660046119b7565b610342565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447611a63565b90508461016f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610221576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561029d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102c0816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102f7576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030989608001518a60c001516105cf565b6103138989610684565b50479250505081811115610336576103366000846103318585611a63565b61086a565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103bd576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103ce3447611a63565b90508680610100015161040d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561044b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861046e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104e3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610520576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b89610543816080015173ffffffffffffffffffffffffffffffffffffffff161590565b1561057a576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105948b600001518c60c001518c8c338d6020013561089f565b60c08c01526105a38b89610684565b504792505050818111156105c1576105c16000846103318585611a63565b505060009091555050505050565b80600003610609576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610662578034101561065e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61065e73ffffffffffffffffffffffffffffffffffffffff8316333084610a3f565b60006106936020830183611a9d565b73ffffffffffffffffffffffffffffffffffffffff16036106e0576040517fe2fe272600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61071382608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610a9c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166398242b3f826020013584608001518560c001518660a0015173ffffffffffffffffffffffffffffffffffffffff1660001b8760e001518760000160208101906107949190611a9d565b60405160e088901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945260448401929092526064830152909116608482015260a4016000604051808303818588803b15801561081657600080fd5b505af115801561082a573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161085e9190611b23565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166108945761088f8282610ac8565b505050565b61088f838383610b35565b6000838082036108db576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600086866108ea600185611a63565b8181106108f9576108f9611c36565b905060200281019061090b9190611c65565b61091c906080810190606001611a9d565b9050600061092982610ba3565b905073ffffffffffffffffffffffffffffffffffffffff8216610953576109503482611a63565b90505b600061095f8989610bee565b905061096b8989610cfa565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526109a6818b8b85610d67565b6000836109b286610ba3565b6109bc9190611a63565b905073ffffffffffffffffffffffffffffffffffffffff85166109e6576109e38882611a63565b90505b8b811015610a2f576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716610a8e57637939f4246000526004601cfd5b600060605260405250505050565b61088f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611158565b73ffffffffffffffffffffffffffffffffffffffff8216610b15576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61065e73ffffffffffffffffffffffffffffffffffffffff831682611287565b73ffffffffffffffffffffffffffffffffffffffff8216610b82576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61088f73ffffffffffffffffffffffffffffffffffffffff841683836112a3565b600073ffffffffffffffffffffffffffffffffffffffff821615610be657610be173ffffffffffffffffffffffffffffffffffffffff8316306112f2565b610be8565b475b92915050565b60608160008167ffffffffffffffff811115610c0c57610c0c61172e565b604051908082528060200260200182016040528015610c35578160200160208202803683370190505b5090506000805b83811015610cef57868682818110610c5657610c56611c36565b9050602002810190610c689190611c65565b610c79906080810190606001611a9d565b9150610c8482610ba3565b838281518110610c9657610c96611c36565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ce75734838281518110610ccf57610ccf611c36565b60200260200101818151610ce39190611a63565b9052505b600101610c3c565b509095945050505050565b60005b8181101561088f5736838383818110610d1857610d18611c36565b9050602002810190610d2a9190611c65565b9050610d3c60e0820160c08301611ca3565b15610d5e57610d5e610d546060830160408401611a9d565b82608001356105cf565b50600101610cfd565b6020840151604085015184918491849083600181146110715760008686610d8f600185611a63565b818110610d9e57610d9e611c36565b9050602002810190610db09190611c65565b610dc1906080810190606001611a9d565b9050600089815b81811015610f6e57368d8d83818110610de357610de3611c36565b9050602002810190610df59190611c65565b9050610e24610e0a6060830160408401611a9d565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e875750610e87610e3d6040830160208401611a9d565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e9e5750610e9e610e3d6020830183611a9d565b8015610f235750610f23610eb560a0830183611cbe565b610ec491600491600091611d2a565b610ecd91611d54565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f59576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610f659082611327565b50600101610dc8565b505060005b610f7e600185611a63565b811015611069576000898983818110610f9957610f99611c36565b9050602002810190610fab9190611c65565b610fbc906080810190606001611a9d565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110605786828151811061100357611003611c36565b602002602001015161101482610ba3565b61101e9190611a63565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611045576000611047565b865b9050831561105e5761105e828a6103318488611a63565b505b50600101610f73565b50505061114c565b8760005b8181101561114957368b8b8381811061109057611090611c36565b90506020028101906110a29190611c65565b90506110b7610e0a6060830160408401611a9d565b806110d057506110d0610e3d6040830160208401611a9d565b80156110e757506110e7610e3d6020830183611a9d565b80156110fe57506110fe610eb560a0830183611cbe565b611134576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516111409082611327565b50600101611075565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156112815773ffffffffffffffffffffffffffffffffffffffff83166111c1576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611236573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125a9190611d9c565b10156112815761128173ffffffffffffffffffffffffffffffffffffffff85168483611604565b50505050565b60003860003884865af161065e5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166112e8576390b8ec186000526004601cfd5b6000603452505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61133c6113376020830183611a9d565b61168e565b611372576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036113b2576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006113c7610e0a6060850160408601611a9d565b6113d25760006113d8565b82608001355b905060006113f46113ef6060860160408701611a9d565b610ba3565b9050600061140b6113ef6080870160608801611a9d565b905082600003611442576114426114286060870160408801611a9d565b6114386040880160208901611a9d565b8760800135610a9c565b846080013582101561148d576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610a26565b60008061149d6020880188611a9d565b73ffffffffffffffffffffffffffffffffffffffff16856114c160a08a018a611cbe565b6040516114cf929190611db5565b60006040518083038185875af1925050503d806000811461150c576040519150601f19603f3d011682016040523d82523d6000602084013e611511565b606091505b5091509150816115245761152481611724565b60006115396113ef60808a0160608b01611a9d565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961156a60208b018b611a9d565b61157a60608c0160408d01611a9d565b61158a60808d0160608e01611a9d565b8c6080013589871161159c57866115a6565b6115a68a88611a63565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166112e85760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166112e857633e3f8f736000526004601cfd5b6040805160178082528183019092526000918291906020820181803683370190505090506017600060208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161171b57506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156117815761178161172e565b60405290565b600082601f83011261179857600080fd5b813567ffffffffffffffff808211156117b3576117b361172e565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156117f9576117f961172e565b8160405283815286602085880101111561181257600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461185657600080fd5b919050565b8035801515811461185657600080fd5b6000610140828403121561187e57600080fd5b61188661175d565b905081358152602082013567ffffffffffffffff808211156118a757600080fd5b6118b385838601611787565b602084015260408401359150808211156118cc57600080fd5b506118d984828501611787565b6040830152506118eb60608301611832565b60608201526118fc60808301611832565b608082015261190d60a08301611832565b60a082015260c082013560c082015260e082013560e082015261010061193481840161185b565b9082015261012061194683820161185b565b9082015292915050565b60006040828403121561196257600080fd5b50919050565b6000806060838503121561197b57600080fd5b823567ffffffffffffffff81111561199257600080fd5b61199e8582860161186b565b9250506119ae8460208501611950565b90509250929050565b600080600080608085870312156119cd57600080fd5b843567ffffffffffffffff808211156119e557600080fd5b6119f18883890161186b565b95506020870135915080821115611a0757600080fd5b818701915087601f830112611a1b57600080fd5b813581811115611a2a57600080fd5b8860208260051b8501011115611a3f57600080fd5b602083019550809450505050611a588660408701611950565b905092959194509250565b81810381811115610be8577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060208284031215611aaf57600080fd5b611ab882611832565b9392505050565b6000815180845260005b81811015611ae557602081850181015186830182015201611ac9565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152611b4c610160850183611abf565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611b878382611abf565b9250506060850151611bb1608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611c248187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611c9957600080fd5b9190910192915050565b600060208284031215611cb557600080fd5b611ab88261185b565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611cf357600080fd5b83018035915067ffffffffffffffff821115611d0e57600080fd5b602001915036819003821315611d2357600080fd5b9250929050565b60008085851115611d3a57600080fd5b83861115611d4757600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611d945780818660040360031b1b83161692505b505092915050565b600060208284031215611dae57600080fd5b5051919050565b818382376000910190815291905056fea264697066735822122046e61b52ae5997d5d2f48f5f8fabaa9cf3c13a25f7e6d49d2a396c1b9ef0717964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_airlift";
            readonly type: "address";
            readonly internalType: "contract IGlacisAirlift";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "airlift";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGlacisAirlift";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGlacis";
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
            readonly name: "_glacisData";
            readonly type: "tuple";
            readonly internalType: "struct GlacisFacet.GlacisData";
            readonly components: readonly [{
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGlacis";
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
            readonly name: "_glacisData";
            readonly type: "tuple";
            readonly internalType: "struct GlacisFacet.GlacisData";
            readonly components: readonly [{
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
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
        readonly name: "InvalidRefundAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetNotSupported";
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
    static createInterface(): GlacisFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GlacisFacet;
}
export {};
