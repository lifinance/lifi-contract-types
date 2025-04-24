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
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405162001e2838038062001e2883398101604081905261003191610069565b6001600160a01b038116610058576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610099565b60006020828403121561007b57600080fd5b81516001600160a01b038116811461009257600080fd5b9392505050565b608051611d66620000c2600039600081816060015281816106ea01526107150152611d666000f3fe6080604052600436106100345760003560e01c8063753cbab61461003957806382a3279b1461004e578063e10c04c1146100ab575b600080fd5b61004c6100473660046118d3565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b9366004611922565b610342565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a34476119ce565b90508461016f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610221576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561029d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102c0816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102f7576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030989608001518a60c001516105cf565b6103138989610684565b504792505050818111156103365761033660008461033185856119ce565b61086a565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103bd576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103ce34476119ce565b90508680610100015161040d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561044b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861046e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104e3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610520576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b89610543816080015173ffffffffffffffffffffffffffffffffffffffff161590565b1561057a576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105948b600001518c60c001518c8c338d602001356108a0565b60c08c01526105a38b89610684565b504792505050818111156105c1576105c160008461033185856119ce565b505060009091555050505050565b80600003610609576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610662578034101561065e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61065e73ffffffffffffffffffffffffffffffffffffffff8316333084610a40565b60006106936020830183611a08565b73ffffffffffffffffffffffffffffffffffffffff16036106e0576040517fe2fe272600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61071382608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610a9d565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166398242b3f826020013584608001518560c001518660a0015173ffffffffffffffffffffffffffffffffffffffff1660001b8760e001518760000160208101906107949190611a08565b60405160e088901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945260448401929092526064830152909116608482015260a4016000604051808303818588803b15801561081657600080fd5b505af115801561082a573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161085e9190611a8e565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561089657610891838383610ac9565b505050565b6108918282610b37565b6000838082036108dc576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600086866108eb6001856119ce565b8181106108fa576108fa611ba1565b905060200281019061090c9190611bd0565b61091d906080810190606001611a08565b9050600061092a82610ba4565b905073ffffffffffffffffffffffffffffffffffffffff82166109545761095134826119ce565b90505b60006109608989610bef565b905061096c8989610cfb565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526109a7818b8b85610d68565b6000836109b386610ba4565b6109bd91906119ce565b905073ffffffffffffffffffffffffffffffffffffffff85166109e7576109e488826119ce565b90505b8b811015610a30576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716610a8f57637939f4246000526004601cfd5b600060605260405250505050565b6108918383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611159565b73ffffffffffffffffffffffffffffffffffffffff8216610b16576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61089173ffffffffffffffffffffffffffffffffffffffff8416838361126c565b73ffffffffffffffffffffffffffffffffffffffff8216610b84576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61065e73ffffffffffffffffffffffffffffffffffffffff8316826112bb565b600073ffffffffffffffffffffffffffffffffffffffff821615610be757610be273ffffffffffffffffffffffffffffffffffffffff8316306112d7565b610be9565b475b92915050565b60608160008167ffffffffffffffff811115610c0d57610c0d611699565b604051908082528060200260200182016040528015610c36578160200160208202803683370190505b5090506000805b83811015610cf057868682818110610c5757610c57611ba1565b9050602002810190610c699190611bd0565b610c7a906080810190606001611a08565b9150610c8582610ba4565b838281518110610c9757610c97611ba1565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ce85734838281518110610cd057610cd0611ba1565b60200260200101818151610ce491906119ce565b9052505b600101610c3d565b509095945050505050565b60005b818110156108915736838383818110610d1957610d19611ba1565b9050602002810190610d2b9190611bd0565b9050610d3d60e0820160c08301611c0e565b15610d5f57610d5f610d556060830160408401611a08565b82608001356105cf565b50600101610cfe565b6020840151604085015184918491849083600181146110725760008686610d906001856119ce565b818110610d9f57610d9f611ba1565b9050602002810190610db19190611bd0565b610dc2906080810190606001611a08565b9050600089815b81811015610f6f57368d8d83818110610de457610de4611ba1565b9050602002810190610df69190611bd0565b9050610e25610e0b6060830160408401611a08565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e885750610e88610e3e6040830160208401611a08565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e9f5750610e9f610e3e6020830183611a08565b8015610f245750610f24610eb660a0830183611c29565b610ec591600491600091611c95565b610ece91611cbf565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f5a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610f66908261130c565b50600101610dc9565b505060005b610f7f6001856119ce565b81101561106a576000898983818110610f9a57610f9a611ba1565b9050602002810190610fac9190611bd0565b610fbd906080810190606001611a08565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146110615786828151811061100457611004611ba1565b602002602001015161101582610ba4565b61101f91906119ce565b9250600073ffffffffffffffffffffffffffffffffffffffff821615611046576000611048565b865b9050831561105f5761105f828a61033184886119ce565b505b50600101610f74565b50505061114d565b8760005b8181101561114a57368b8b8381811061109157611091611ba1565b90506020028101906110a39190611bd0565b90506110b8610e0b6060830160408401611a08565b806110d157506110d1610e3e6040830160208401611a08565b80156110e857506110e8610e3e6020830183611a08565b80156110ff57506110ff610eb660a0830183611c29565b611135576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c51611141908261130c565b50600101611076565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166111a6576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561121b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123f9190611d07565b10156112665761126673ffffffffffffffffffffffffffffffffffffffff851684836115e9565b50505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166112b1576390b8ec186000526004601cfd5b6000603452505050565b60003860003884865af161065e5763b12d13eb6000526004601cfd5b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61132161131c6020830183611a08565b611673565b611357576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611397576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006113ac610e0b6060850160408601611a08565b6113b75760006113bd565b82608001355b905060006113d96113d46060860160408701611a08565b610ba4565b905060006113f06113d46080870160608801611a08565b9050826000036114275761142761140d6060870160408801611a08565b61141d6040880160208901611a08565b8760800135610a9d565b8460800135821015611472576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610a27565b6000806114826020880188611a08565b73ffffffffffffffffffffffffffffffffffffffff16856114a660a08a018a611c29565b6040516114b4929190611d20565b60006040518083038185875af1925050503d80600081146114f1576040519150601f19603f3d011682016040523d82523d6000602084013e6114f6565b606091505b509150915081611509576115098161168f565b600061151e6113d460808a0160608b01611a08565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961154f60208b018b611a08565b61155f60608c0160408d01611a08565b61156f60808d0160608e01611a08565b8c60800135898711611581578661158b565b61158b8a886119ce565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166112b15760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166112b157633e3f8f736000526004601cfd5b6000813f8181158015906116875750808214155b949350505050565b8051602082018181fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156116ec576116ec611699565b60405290565b600082601f83011261170357600080fd5b813567ffffffffffffffff8082111561171e5761171e611699565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561176457611764611699565b8160405283815286602085880101111561177d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146117c157600080fd5b919050565b803580151581146117c157600080fd5b600061014082840312156117e957600080fd5b6117f16116c8565b905081358152602082013567ffffffffffffffff8082111561181257600080fd5b61181e858386016116f2565b6020840152604084013591508082111561183757600080fd5b50611844848285016116f2565b6040830152506118566060830161179d565b60608201526118676080830161179d565b608082015261187860a0830161179d565b60a082015260c082013560c082015260e082013560e082015261010061189f8184016117c6565b908201526101206118b18382016117c6565b9082015292915050565b6000604082840312156118cd57600080fd5b50919050565b600080606083850312156118e657600080fd5b823567ffffffffffffffff8111156118fd57600080fd5b611909858286016117d6565b92505061191984602085016118bb565b90509250929050565b6000806000806080858703121561193857600080fd5b843567ffffffffffffffff8082111561195057600080fd5b61195c888389016117d6565b9550602087013591508082111561197257600080fd5b818701915087601f83011261198657600080fd5b81358181111561199557600080fd5b8860208260051b85010111156119aa57600080fd5b6020830195508094505050506119c386604087016118bb565b905092959194509250565b81810381811115610be9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060208284031215611a1a57600080fd5b611a238261179d565b9392505050565b6000815180845260005b81811015611a5057602081850181015186830182015201611a34565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152611ab7610160850183611a2a565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611af28382611a2a565b9250506060850151611b1c608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611b8f8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611c0457600080fd5b9190910192915050565b600060208284031215611c2057600080fd5b611a23826117c6565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611c5e57600080fd5b83018035915067ffffffffffffffff821115611c7957600080fd5b602001915036819003821315611c8e57600080fd5b9250929050565b60008085851115611ca557600080fd5b83861115611cb257600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611cff5780818660040360031b1b83161692505b505092915050565b600060208284031215611d1957600080fd5b5051919050565b818382376000910190815291905056fea2646970667358221220621ad74b02dac0000142146b99bee4539aeabf5cfdbda6a1101f6af8b0464e4f64736f6c63430008110033";
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
