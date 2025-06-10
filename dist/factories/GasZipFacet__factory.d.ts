import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GasZipFacet, GasZipFacetInterface } from "../GasZipFacet";
declare type GasZipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasZipFacet__factory extends ContractFactory {
    constructor(...args: GasZipFacetConstructorParams);
    deploy(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasZipFacet>;
    getDeployTransaction(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasZipFacet;
    connect(signer: Signer): GasZipFacet__factory;
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051611d1c380380611d1c833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b608051611c726100aa5f395f8181606d01526107cd0152611c725ff3fe608060405260043610610058575f3560e01c8063606326ff11610041578063606326ff146100e6578063b49d391d146100fb578063fc5f100314610122575f5ffd5b8063194c869f1461005c57806346fd98e2146100b9575b5f5ffd5b348015610067575f5ffd5b5061008f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100c4575f5ffd5b506100d86100d3366004611593565b610135565b6040519081526020016100b0565b6100f96100f4366004611807565b6101c1565b005b348015610106575f5ffd5b5061008f7311f111f111f111f111f111f111f111f111f111f181565b6100f9610130366004611883565b6103ab565b5f816010811115610172576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b818110156101b95784848281811061018e5761018e6118cf565b90506020020160208101906101a391906118fc565b60ff16601084901b179250806001019050610174565b505092915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161023c576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61024c3447611923565b90508680610100015161028b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156102c9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61032588886102d9600182611923565b8181106102e8576102e86118cf565b90506020028101906102fa919061195b565b61030b906080810190606001611997565b73ffffffffffffffffffffffffffffffffffffffff161590565b61035b576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61036f895f01518a60c001518a8a33610549565b60c08a015261037e898761068c565b504790508181111561039e5761039e5f846103998585611923565b610875565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610426576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155610100830151839015610469576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83806101200151156104a7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608085015173ffffffffffffffffffffffffffffffffffffffff16156104f9576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8460c001513414610536576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610540858561068c565b50505f90555050565b5f82808203610584576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610592600185611923565b8181106105a1576105a16118cf565b90506020028101906105b3919061195b565b6105c4906080810190606001611997565b90505f6105d0826108aa565b905073ffffffffffffffffffffffffffffffffffffffff82166105fa576105f73482611923565b90505b5f61060588886108f4565b905061061188886109fe565b61061e8a89898985610a6a565b5f82610629856108aa565b6106339190611923565b90508981101561067e576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b80356106c4576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11480159061071b57508160a0015160601b6bffffffffffffffffffffffff1916815f013514155b15610752576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e001510361078f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08201516040517fc9630cb000000000000000000000000000000000000000000000000000000000815260208301356004820152823560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163c9630cb0916044015f604051808303818588803b158015610823575f5ffd5b505af1158015610835573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161086991906119fc565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831661089f5761089a8282610d88565b505050565b61089a838383610df9565b5f73ffffffffffffffffffffffffffffffffffffffff8216156108ec576108e773ffffffffffffffffffffffffffffffffffffffff831630610e67565b6108ee565b475b92915050565b6060815f8167ffffffffffffffff811115610911576109116115d2565b60405190808252806020026020018201604052801561093a578160200160208202803683370190505b5090505f805b838110156109f35786868281811061095a5761095a6118cf565b905060200281019061096c919061195b565b61097d906080810190606001611997565b9150610988826108aa565b83828151811061099a5761099a6118cf565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166109eb57348382815181106109d3576109d36118cf565b602002602001018181516109e79190611923565b9052505b600101610940565b509095945050505050565b5f5b8181101561089a5736838383818110610a1b57610a1b6118cf565b9050602002810190610a2d919061195b565b9050610a3f60e0820160c08301611b0f565b15610a6157610a61610a576060830160408401611997565b8260800135610e9a565b50600101610a00565b8383838382805f5b81811015610bf957368b8b83818110610a8d57610a8d6118cf565b9050602002810190610a9f919061195b565b9050610ab461030b6060830160408401611997565b80610b165750610b16610acd6040830160208401611997565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610b2d5750610b2d610acd6020830183611997565b8015610bb05750610bb0610b4460a0830183611b28565b610b52916004915f91611b89565b610b5b91611bb0565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610be6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bf08d82610f4a565b50600101610a72565b505080600114610d12575f8585610c11600185611923565b818110610c2057610c206118cf565b9050602002810190610c32919061195b565b610c43906080810190606001611997565b90505f805b610c53600185611923565b811015610d0e575f888883818110610c6d57610c6d6118cf565b9050602002810190610c7f919061195b565b610c90906080810190606001611997565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d0557858281518110610cd757610cd76118cf565b6020026020010151610ce8826108aa565b610cf29190611923565b92508215610d0557610d05818885610875565b50600101610c48565b5050505b5f5b81811015610d7b575f868683818110610d2f57610d2f6118cf565b9050602002810190610d41919061195b565b610d52906060810190604001611997565b90505f610d5e826108aa565b90508015610d7157610d71828783610875565b5050600101610d14565b5050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610dd5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610df573ffffffffffffffffffffffffffffffffffffffff83168261121c565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610e46576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61089a73ffffffffffffffffffffffffffffffffffffffff84168383611235565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f03610ed3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f285780341015610df5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610df573ffffffffffffffffffffffffffffffffffffffff831633308461127e565b610f5f610f5a6020830183611997565b6112d6565b610f95576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610fd4576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610fe861030b6060850160408601611997565b610ff2575f610ff8565b82608001355b90505f61101361100e6060860160408701611997565b6108aa565b90505f61102961100e6080870160608801611997565b9050825f0361105f5761105f6110456060870160408801611997565b6110556040880160208901611997565b876080013561136a565b84608001358210156110aa576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610675565b5f806110b96020880188611997565b73ffffffffffffffffffffffffffffffffffffffff16856110dd60a08a018a611b28565b6040516110eb929190611c16565b5f6040518083038185875af1925050503d805f8114611125576040519150601f19603f3d011682016040523d82523d5f602084013e61112a565b606091505b50915091508161113d5761113d81611396565b5f61115161100e60808a0160608b01611997565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961118260208b018b611997565b61119260608c0160408d01611997565b6111a260808d0160608e01611997565b8c608001358987116111b457866111be565b6111be8a88611923565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b5f385f3884865af1610df55763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611275576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166112c957637939f4245f526004601cfd5b5f60605260405250505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161136157506023015160601c3b151592915050565b5050503b151590565b61089a8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6113a0565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156114c75773ffffffffffffffffffffffffffffffffffffffff8316611409576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561147c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114a09190611c25565b10156114c7576114c773ffffffffffffffffffffffffffffffffffffffff851684836114cd565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611275575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661127557633e3f8f735f526004601cfd5b5f5f83601f84011261155b575f5ffd5b50813567ffffffffffffffff811115611572575f5ffd5b6020830191508360208260051b850101111561158c575f5ffd5b9250929050565b5f5f602083850312156115a4575f5ffd5b823567ffffffffffffffff8111156115ba575f5ffd5b6115c68582860161154b565b90969095509350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611623576116236115d2565b60405290565b5f82601f830112611638575f5ffd5b813567ffffffffffffffff811115611652576116526115d2565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561169f5761169f6115d2565b6040528181528382016020018510156116b6575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146116f5575f5ffd5b919050565b803580151581146116f5575f5ffd5b5f610140828403121561171a575f5ffd5b6117226115ff565b823581529050602082013567ffffffffffffffff811115611741575f5ffd5b61174d84828501611629565b602083015250604082013567ffffffffffffffff81111561176c575f5ffd5b61177884828501611629565b60408301525061178a606083016116d2565b606082015261179b608083016116d2565b60808201526117ac60a083016116d2565b60a082015260c0828101359082015260e080830135908201526117d261010083016116fa565b6101008201526117e561012083016116fa565b61012082015292915050565b5f60408284031215611801575f5ffd5b50919050565b5f5f5f5f6080858703121561181a575f5ffd5b843567ffffffffffffffff811115611830575f5ffd5b61183c87828801611709565b945050602085013567ffffffffffffffff811115611858575f5ffd5b6118648782880161154b565b9094509250611878905086604087016117f1565b905092959194509250565b5f5f60608385031215611894575f5ffd5b823567ffffffffffffffff8111156118aa575f5ffd5b6118b685828601611709565b9250506118c684602085016117f1565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f6020828403121561190c575f5ffd5b813560ff8116811461191c575f5ffd5b9392505050565b818103818111156108ee577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261198d575f5ffd5b9190910192915050565b5f602082840312156119a7575f5ffd5b61191c826116d2565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611a236101608401826119b0565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611a5e82826119b0565b9150506060840151611a88608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611af761012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611b1f575f5ffd5b61191c826116fa565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b5b575f5ffd5b83018035915067ffffffffffffffff821115611b75575f5ffd5b60200191503681900382131561158c575f5ffd5b5f5f85851115611b97575f5ffd5b83861115611ba3575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611c0f577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611c35575f5ffd5b505191905056fea264697066735822122029aecf755e34d8ad7699b5bda009d0c904d93e8ef7b0a2db2568c334976d8d3364736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gasZipRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "GAS_ZIP_ROUTER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGasZip";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "NON_EVM_ADDRESS";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDestinationChainsValue";
        readonly inputs: readonly [{
            readonly name: "_chainIds";
            readonly type: "uint8[]";
            readonly internalType: "uint8[]";
        }];
        readonly outputs: readonly [{
            readonly name: "destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGasZip";
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
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGasZip";
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
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
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
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
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
        readonly name: "OnlyNativeAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TooManyChainIds";
        readonly inputs: readonly [];
    }];
    static createInterface(): GasZipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasZipFacet;
}
export {};
