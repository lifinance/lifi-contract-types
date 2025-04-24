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
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405162001e2d38038062001e2d83398101604081905261003191610069565b6001600160a01b038116610058576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610099565b60006020828403121561007b57600080fd5b81516001600160a01b038116811461009257600080fd5b9392505050565b608051611d6b620000c2600039600081816060015281816106ea01526107150152611d6b6000f3fe6080604052600436106100345760003560e01c8063753cbab61461003957806382a3279b1461004e578063e10c04c1146100ab575b600080fd5b61004c6100473660046118d8565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b9366004611927565b610342565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a34476119d3565b90508461016f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610221576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561029d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102c0816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102f7576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030989608001518a60c001516105cf565b6103138989610684565b504792505050818111156103365761033660008461033185856119d3565b61086a565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103bd576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103ce34476119d3565b90508680610100015161040d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561044b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861046e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104e3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610520576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b89610543816080015173ffffffffffffffffffffffffffffffffffffffff161590565b1561057a576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105948b600001518c60c001518c8c338d6020013561089f565b60c08c01526105a38b89610684565b504792505050818111156105c1576105c160008461033185856119d3565b505060009091555050505050565b80600003610609576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610662578034101561065e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61065e73ffffffffffffffffffffffffffffffffffffffff8316333084610a3f565b60006106936020830183611a0d565b73ffffffffffffffffffffffffffffffffffffffff16036106e0576040517fe2fe272600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61071382608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610a9c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166398242b3f826020013584608001518560c001518660a0015173ffffffffffffffffffffffffffffffffffffffff1660001b8760e001518760000160208101906107949190611a0d565b60405160e088901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945260448401929092526064830152909116608482015260a4016000604051808303818588803b15801561081657600080fd5b505af115801561082a573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161085e9190611a93565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166108945761088f8282610ac8565b505050565b61088f838383610b35565b6000838082036108db576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600086866108ea6001856119d3565b8181106108f9576108f9611ba6565b905060200281019061090b9190611bd5565b61091c906080810190606001611a0d565b9050600061092982610ba3565b905073ffffffffffffffffffffffffffffffffffffffff82166109535761095034826119d3565b90505b600061095f8989610bee565b905061096b8989610cfa565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526109a6818b8b85610d67565b6000836109b286610ba3565b6109bc91906119d3565b905073ffffffffffffffffffffffffffffffffffffffff85166109e6576109e388826119d3565b90505b8b811015610a2f576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716610a8e57637939f4246000526004601cfd5b600060605260405250505050565b61088f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611158565b73ffffffffffffffffffffffffffffffffffffffff8216610b15576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61065e73ffffffffffffffffffffffffffffffffffffffff83168261126b565b73ffffffffffffffffffffffffffffffffffffffff8216610b82576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61088f73ffffffffffffffffffffffffffffffffffffffff84168383611287565b600073ffffffffffffffffffffffffffffffffffffffff821615610be657610be173ffffffffffffffffffffffffffffffffffffffff8316306112d6565b610be8565b475b92915050565b60608160008167ffffffffffffffff811115610c0c57610c0c61169e565b604051908082528060200260200182016040528015610c35578160200160208202803683370190505b5090506000805b83811015610cef57868682818110610c5657610c56611ba6565b9050602002810190610c689190611bd5565b610c79906080810190606001611a0d565b9150610c8482610ba3565b838281518110610c9657610c96611ba6565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ce75734838281518110610ccf57610ccf611ba6565b60200260200101818151610ce391906119d3565b9052505b600101610c3c565b509095945050505050565b60005b8181101561088f5736838383818110610d1857610d18611ba6565b9050602002810190610d2a9190611bd5565b9050610d3c60e0820160c08301611c13565b15610d5e57610d5e610d546060830160408401611a0d565b82608001356105cf565b50600101610cfd565b6020840151604085015184918491849083600181146110715760008686610d8f6001856119d3565b818110610d9e57610d9e611ba6565b9050602002810190610db09190611bd5565b610dc1906080810190606001611a0d565b9050600089815b81811015610f6e57368d8d83818110610de357610de3611ba6565b9050602002810190610df59190611bd5565b9050610e24610e0a6060830160408401611a0d565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e875750610e87610e3d6040830160208401611a0d565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e9e5750610e9e610e3d6020830183611a0d565b8015610f235750610f23610eb560a0830183611c2e565b610ec491600491600091611c9a565b610ecd91611cc4565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f59576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610f65908261130b565b50600101610dc8565b505060005b610f7e6001856119d3565b811015611069576000898983818110610f9957610f99611ba6565b9050602002810190610fab9190611bd5565b610fbc906080810190606001611a0d565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110605786828151811061100357611003611ba6565b602002602001015161101482610ba3565b61101e91906119d3565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611045576000611047565b865b9050831561105e5761105e828a61033184886119d3565b505b50600101610f73565b50505061114c565b8760005b8181101561114957368b8b8381811061109057611090611ba6565b90506020028101906110a29190611bd5565b90506110b7610e0a6060830160408401611a0d565b806110d057506110d0610e3d6040830160208401611a0d565b80156110e757506110e7610e3d6020830183611a0d565b80156110fe57506110fe610eb560a0830183611c2e565b611134576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c51611140908261130b565b50600101611075565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166111a5576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561121a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123e9190611d0c565b10156112655761126573ffffffffffffffffffffffffffffffffffffffff8516848361160a565b50505050565b60003860003884865af161065e5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166112cc576390b8ec186000526004601cfd5b6000603452505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61134261131b6020830183611a0d565b3f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470141590565b611378576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036113b8576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006113cd610e0a6060850160408601611a0d565b6113d85760006113de565b82608001355b905060006113fa6113f56060860160408701611a0d565b610ba3565b905060006114116113f56080870160608801611a0d565b9050826000036114485761144861142e6060870160408801611a0d565b61143e6040880160208901611a0d565b8760800135610a9c565b8460800135821015611493576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610a26565b6000806114a36020880188611a0d565b73ffffffffffffffffffffffffffffffffffffffff16856114c760a08a018a611c2e565b6040516114d5929190611d25565b60006040518083038185875af1925050503d8060008114611512576040519150601f19603f3d011682016040523d82523d6000602084013e611517565b606091505b50915091508161152a5761152a81611694565b600061153f6113f560808a0160608b01611a0d565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961157060208b018b611a0d565b61158060608c0160408d01611a0d565b61159060808d0160608e01611a0d565b8c608001358987116115a257866115ac565b6115ac8a886119d3565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166112cc5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166112cc57633e3f8f736000526004601cfd5b8051602082018181fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156116f1576116f161169e565b60405290565b600082601f83011261170857600080fd5b813567ffffffffffffffff808211156117235761172361169e565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156117695761176961169e565b8160405283815286602085880101111561178257600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146117c657600080fd5b919050565b803580151581146117c657600080fd5b600061014082840312156117ee57600080fd5b6117f66116cd565b905081358152602082013567ffffffffffffffff8082111561181757600080fd5b611823858386016116f7565b6020840152604084013591508082111561183c57600080fd5b50611849848285016116f7565b60408301525061185b606083016117a2565b606082015261186c608083016117a2565b608082015261187d60a083016117a2565b60a082015260c082013560c082015260e082013560e08201526101006118a48184016117cb565b908201526101206118b68382016117cb565b9082015292915050565b6000604082840312156118d257600080fd5b50919050565b600080606083850312156118eb57600080fd5b823567ffffffffffffffff81111561190257600080fd5b61190e858286016117db565b92505061191e84602085016118c0565b90509250929050565b6000806000806080858703121561193d57600080fd5b843567ffffffffffffffff8082111561195557600080fd5b611961888389016117db565b9550602087013591508082111561197757600080fd5b818701915087601f83011261198b57600080fd5b81358181111561199a57600080fd5b8860208260051b85010111156119af57600080fd5b6020830195508094505050506119c886604087016118c0565b905092959194509250565b81810381811115610be8577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060208284031215611a1f57600080fd5b611a28826117a2565b9392505050565b6000815180845260005b81811015611a5557602081850181015186830182015201611a39565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152611abc610160850183611a2f565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611af78382611a2f565b9250506060850151611b21608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611b948187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611c0957600080fd5b9190910192915050565b600060208284031215611c2557600080fd5b611a28826117cb565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611c6357600080fd5b83018035915067ffffffffffffffff821115611c7e57600080fd5b602001915036819003821315611c9357600080fd5b9250929050565b60008085851115611caa57600080fd5b83861115611cb757600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611d045780818660040360031b1b83161692505b505092915050565b600060208284031215611d1e57600080fd5b5051919050565b818382376000910190815291905056fea2646970667358221220f6c8bc8353f1c36cb6951880ed57a1eaedc2dc0fc8efa36fa84573592bc20a0764736f6c63430008110033";
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
