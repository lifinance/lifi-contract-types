import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PioneerFacet, PioneerFacetInterface } from "../PioneerFacet";
type PioneerFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PioneerFacet__factory extends ContractFactory {
    constructor(...args: PioneerFacetConstructorParams);
    deploy(_pioneerAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PioneerFacet>;
    getDeployTransaction(_pioneerAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PioneerFacet;
    connect(signer: Signer): PioneerFacet__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051611c6e380380611c6e83398101604081905261002f91610067565b6001600160a01b038116610056576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610097565b60006020828403121561007957600080fd5b81516001600160a01b038116811461009057600080fd5b9392505050565b608051611bb66100b860003960008181604b01526106f90152611bb66000f3fe6080604052600436106100345760003560e01c80631a7c5c4b146100395780637d09055814610096578063c02fc302146100ab575b600080fd5b34801561004557600080fd5b5061006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a96100a43660046116e1565b6100be565b005b6100a96100b936600461178d565b6102f0565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a344761180b565b905086806101000151610189576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101ea8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610221576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361025f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361029c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b18a600001518b60c001518b8b33610514565b60c08b01526102c08a8861065b565b5047915050818111156102e2576102e26000846102dd858561180b565b6107ac565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161036b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061037c344761180b565b9050846103a18160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103d8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610416576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610453576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610491576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156104cf576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104e188608001518960c001516107e1565b6104eb888861065b565b504791505081811115610508576105086000846102dd858561180b565b50506000909155505050565b600082808203610550576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561055f60018561180b565b81811061056e5761056e61181e565b9050602002810190610580919061184d565b61059190608081019060600161188b565b9050600061059e82610896565b905073ffffffffffffffffffffffffffffffffffffffff82166105c8576105c5348261180b565b90505b60006105d488886108e1565b90506105e088886109f5565b6105ed8a89898985610a62565b6000826105f985610896565b610603919061180b565b90508981101561064d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b8151610693576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006106a2602083018361188b565b73ffffffffffffffffffffffffffffffffffffffff16036106ef576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61072282608001517f00000000000000000000000000000000000000000000000000000000000000008460c001516107ac565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516107519190611913565b60405180910390a1610766602082018261188b565b73ffffffffffffffffffffffffffffffffffffffff167fb267693984b7ccdaff7711e6d5b83ad1bb6a998951e2d1a91e6f83855aa0318f60405160405180910390a25050565b73ffffffffffffffffffffffffffffffffffffffff83166107d6576107d18282610c31565b505050565b6107d1838383610c9e565b8060000361081b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166108745780341015610870576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61087073ffffffffffffffffffffffffffffffffffffffff8316333084610d0c565b600073ffffffffffffffffffffffffffffffffffffffff8216156108d9576108d473ffffffffffffffffffffffffffffffffffffffff831630610d69565b6108db565b475b92915050565b60608160008167ffffffffffffffff8111156108ff576108ff61149b565b604051908082528060200260200182016040528015610928578160200160208202803683370190505b5090506000805b838110156109ea578686828181106109495761094961181e565b905060200281019061095b919061184d565b61096c90608081019060600161188b565b915061097782610896565b8382815181106109895761098961181e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166109da57348382815181106109c2576109c261181e565b602002602001018181516109d6919061180b565b9052505b6109e381611a26565b905061092f565b509095945050505050565b60005b818110156107d15736838383818110610a1357610a1361181e565b9050602002810190610a25919061184d565b9050610a3760e0820160c08301611a5e565b15610a5957610a59610a4f606083016040840161188b565b82608001356107e1565b506001016109f8565b838383838260005b81811015610c1657368a8a83818110610a8557610a8561181e565b9050602002810190610a97919061184d565b9050610ac6610aac606083016040840161188b565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610b295750610b29610adf604083016020840161188b565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610b405750610b40610adf602083018361188b565b8015610bc55750610bc5610b5760a0830183611a79565b610b6691600491600091611ae5565b610b6f91611b0f565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610bfb576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c058c82610d9e565b50610c0f81611a26565b9050610a6a565b5050610c2684848484600061101b565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c7e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61087073ffffffffffffffffffffffffffffffffffffffff831682611241565b73ffffffffffffffffffffffffffffffffffffffff8216610ceb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107d173ffffffffffffffffffffffffffffffffffffffff8416838361125d565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716610d5b57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b610db6610dae602083018361188b565b6017903b1190565b610dec576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610e2c576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610e41610aac606085016040860161188b565b610e4c576000610e52565b82608001355b90506000610e6e610e69608086016060870161188b565b610896565b905081600003610ea557610ea5610e8b606086016040870161188b565b610e9b604087016020880161188b565b86608001356112ac565b600080610eb5602087018761188b565b73ffffffffffffffffffffffffffffffffffffffff1684610ed960a0890189611a79565b604051610ee7929190611b57565b60006040518083038185875af1925050503d8060008114610f24576040519150601f19603f3d011682016040523d82523d6000602084013e610f29565b606091505b509150915081610f3c57610f3c816112d8565b6000610f51610e696080890160608a0161188b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888610f8260208a018a61188b565b610f9260608b0160408c0161188b565b610fa260808c0160608d0161188b565b8b60800135898711610fb45786610fbe565b610fbe8a8861180b565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b836000868261102b60018261180b565b81811061103a5761103a61181e565b905060200281019061104c919061184d565b61105d90608081019060600161188b565b905060008060008060008060005b888110156112315761107e60018a61180b565b8110801561108d575088600114155b15611169578d8d828181106110a4576110a461181e565b90506020028101906110b6919061184d565b6110c790608081019060600161188b565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611169578a818151811061110e5761110e61181e565b602002602001015161111f87610896565b611129919061180b565b965073ffffffffffffffffffffffffffffffffffffffff86161561114e576000611150565b895b93508387111561116957611169868d6102dd878b61180b565b8d8d8281811061117b5761117b61181e565b905060200281019061118d919061184d565b61119e90606081019060400161188b565b94506111a985610896565b925073ffffffffffffffffffffffffffffffffffffffff8516156111ce5760006111d0565b895b9150818311801561120d57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561122157611221858d6102dd858761180b565b61122a81611a26565b905061106b565b5050505050505050505050505050565b60003860003884865af16108705763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166112a2576390b8ec186000526004601cfd5b6000603452505050565b6107d18383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6112e2565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff84161561140b5773ffffffffffffffffffffffffffffffffffffffff831661134b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156113c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113e49190611b67565b101561140b5761140b73ffffffffffffffffffffffffffffffffffffffff85168483611411565b50505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166112a25760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166112a257633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156114ee576114ee61149b565b60405290565b600082601f83011261150557600080fd5b813567ffffffffffffffff808211156115205761152061149b565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156115665761156661149b565b8160405283815286602085880101111561157f57600080fd5b836020870160208301376000602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff811681146115c157600080fd5b50565b80356115cf8161159f565b919050565b803580151581146115cf57600080fd5b600061014082840312156115f757600080fd5b6115ff6114ca565b905081358152602082013567ffffffffffffffff8082111561162057600080fd5b61162c858386016114f4565b6020840152604084013591508082111561164557600080fd5b50611652848285016114f4565b604083015250611664606083016115c4565b6060820152611675608083016115c4565b608082015261168660a083016115c4565b60a082015260c082013560c082015260e082013560e08201526101006116ad8184016115d4565b908201526101206116bf8382016115d4565b9082015292915050565b6000602082840312156116db57600080fd5b50919050565b600080600080606085870312156116f757600080fd5b843567ffffffffffffffff8082111561170f57600080fd5b61171b888389016115e4565b9550602087013591508082111561173157600080fd5b818701915087601f83011261174557600080fd5b81358181111561175457600080fd5b8860208260051b850101111561176957600080fd5b60208301955080945050505061178286604087016116c9565b905092959194509250565b600080604083850312156117a057600080fd5b823567ffffffffffffffff8111156117b757600080fd5b6117c3858286016115e4565b9250506117d384602085016116c9565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156108db576108db6117dc565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261188157600080fd5b9190910192915050565b60006020828403121561189d57600080fd5b81356118a88161159f565b9392505050565b6000815180845260005b818110156118d5576020818501810151868301820152016118b9565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201526000602083015161014080604085015261193c6101608501836118af565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261197783826118af565b92505060608501516119a1608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611a148187018315159052565b90950151151593019290925250919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611a5757611a576117dc565b5060010190565b600060208284031215611a7057600080fd5b6118a8826115d4565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611aae57600080fd5b83018035915067ffffffffffffffff821115611ac957600080fd5b602001915036819003821315611ade57600080fd5b9250929050565b60008085851115611af557600080fd5b83861115611b0257600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611b4f5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215611b7957600080fd5b505191905056fea2646970667358221220c7a21b4429be91f7cda6309589cf21e2cc23ca053d0e33c58b6f77c859d0c1e064736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_pioneerAddress";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "PIONEER_ADDRESS";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaPioneer";
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
            readonly name: "_pioneerData";
            readonly type: "tuple";
            readonly internalType: "struct PioneerFacet.PioneerData";
            readonly components: readonly [{
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address payable";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaPioneer";
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
            readonly name: "_pioneerData";
            readonly type: "tuple";
            readonly internalType: "struct PioneerFacet.PioneerData";
            readonly components: readonly [{
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address payable";
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
        readonly type: "event";
        readonly name: "PioneerRefundAddressRegistered";
        readonly inputs: readonly [{
            readonly name: "refundTo";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
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
    static createInterface(): PioneerFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PioneerFacet;
}
export {};
