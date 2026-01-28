import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OmniBridgeFacet, OmniBridgeFacetInterface } from "../OmniBridgeFacet";
type OmniBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OmniBridgeFacet__factory extends ContractFactory {
    constructor(...args: OmniBridgeFacetConstructorParams);
    deploy(_foreignOmniBridge: PromiseOrValue<string>, _wethOmniBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OmniBridgeFacet>;
    getDeployTransaction(_foreignOmniBridge: PromiseOrValue<string>, _wethOmniBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OmniBridgeFacet;
    connect(signer: Signer): OmniBridgeFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162001cf938038062001cf9833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a051611c2b620000ce60003960006105cb01526000818161063801526106c20152611c2b6000f3fe6080604052600436106100295760003560e01c8063782621d81461002e5780639572678214610043575b600080fd5b61004161003c36600461177c565b610056565b005b6100416100513660046117b9565b61027d565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447611882565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024787608001518860c001516104a8565b6102508761055d565b5047915050818111156102725761027260008461026d8585611882565b61075b565b505060009091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103093447611882565b905085806101000151610348576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610386576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103a98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361041e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047089600001518a60c001518a8a33610790565b60c08a015261047e8961055d565b50479150508181111561049b5761049b60008461026d8585611882565b5050600090915550505050565b806000036104e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053b5780341015610537576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61053773ffffffffffffffffffffffffffffffffffffffff83163330846108d7565b608081015173ffffffffffffffffffffffffffffffffffffffff1661062e5760c081015160a08201516040517ff52cbf0e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f00000000000000000000000000000000000000000000000000000000000000009091169163f52cbf0e916024016000604051808303818588803b15801561061057600080fd5b505af1158015610624573d6000803e3d6000fd5b5050505050610721565b61066181608001517f00000000000000000000000000000000000000000000000000000000000000008360c00151610934565b608081015160a082015160c08301516040517fad58bdd100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9384166004820152918316602483015260448201527f00000000000000000000000000000000000000000000000000000000000000009091169063ad58bdd190606401600060405180830381600087803b15801561070857600080fd5b505af115801561071c573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161075091906118f9565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff8316610785576107808282610960565b505050565b6107808383836109cd565b6000828082036107cc576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856107db600185611882565b8181106107ea576107ea611a0c565b90506020028101906107fc9190611a3b565b61080d906080810190606001611a79565b9050600061081a82610a3b565b905073ffffffffffffffffffffffffffffffffffffffff8216610844576108413482611882565b90505b60006108508888610a86565b905061085c8888610b9a565b6108698a89898985610c07565b60008261087585610a3b565b61087f9190611882565b9050898110156108c9576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661092657637939f4246000526004601cfd5b600060605260405250505050565b6107808383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e54565b73ffffffffffffffffffffffffffffffffffffffff82166109ad576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61053773ffffffffffffffffffffffffffffffffffffffff831682610f83565b73ffffffffffffffffffffffffffffffffffffffff8216610a1a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61078073ffffffffffffffffffffffffffffffffffffffff84168383610f9f565b600073ffffffffffffffffffffffffffffffffffffffff821615610a7e57610a7973ffffffffffffffffffffffffffffffffffffffff831630610fee565b610a80565b475b92915050565b60608160008167ffffffffffffffff811115610aa457610aa461155a565b604051908082528060200260200182016040528015610acd578160200160208202803683370190505b5090506000805b83811015610b8f57868682818110610aee57610aee611a0c565b9050602002810190610b009190611a3b565b610b11906080810190606001611a79565b9150610b1c82610a3b565b838281518110610b2e57610b2e611a0c565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b7f5734838281518110610b6757610b67611a0c565b60200260200101818151610b7b9190611882565b9052505b610b8881611a9b565b9050610ad4565b509095945050505050565b60005b818110156107805736838383818110610bb857610bb8611a0c565b9050602002810190610bca9190611a3b565b9050610bdc60e0820160c08301611ad3565b15610bfe57610bfe610bf46060830160408401611a79565b82608001356104a8565b50600101610b9d565b8383838382600080805b83811015610e3757368c8c83818110610c2c57610c2c611a0c565b9050602002810190610c3e9190611a3b565b9050610c4d6020820182611a79565b9350610c5f6040820160208301611a79565b9250610d0484610c7260a0840184611aee565b610c8191600491600091611b5a565b610c8a91611b84565b73ffffffffffffffffffffffffffffffffffffffff9190911660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580610ded5750610d38610d1e6060830160408401611a79565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015610d7157508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015610ded575073ffffffffffffffffffffffffffffffffffffffff831660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15610e24576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e2e8e82611023565b50600101610c11565b50505050610e498484848460006112a0565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615610f7d5773ffffffffffffffffffffffffffffffffffffffff8316610ebd576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610f32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f569190611bcc565b1015610f7d57610f7d73ffffffffffffffffffffffffffffffffffffffff851684836114c6565b50505050565b60003860003884865af16105375763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610fe4576390b8ec186000526004601cfd5b6000603452505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61103b6110336020830183611a79565b6017903b1190565b611071576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036110b1576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006110c6610d1e6060850160408601611a79565b6110d15760006110d7565b82608001355b905060006110f36110ee6080860160608701611a79565b610a3b565b90508160000361112a5761112a6111106060860160408701611a79565b6111206040870160208801611a79565b8660800135610934565b60008061113a6020870187611a79565b73ffffffffffffffffffffffffffffffffffffffff168461115e60a0890189611aee565b60405161116c929190611be5565b60006040518083038185875af1925050503d80600081146111a9576040519150601f19603f3d011682016040523d82523d6000602084013e6111ae565b606091505b5091509150816111c1576111c181611550565b60006111d66110ee6080890160608a01611a79565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861120760208a018a611a79565b61121760608b0160408c01611a79565b61122760808c0160608d01611a79565b8b608001358987116112395786611243565b6112438a88611882565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b83600086826112b0600182611882565b8181106112bf576112bf611a0c565b90506020028101906112d19190611a3b565b6112e2906080810190606001611a79565b905060008060008060008060005b888110156114b65761130360018a611882565b81108015611312575088600114155b156113ee578d8d8281811061132957611329611a0c565b905060200281019061133b9190611a3b565b61134c906080810190606001611a79565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146113ee578a818151811061139357611393611a0c565b60200260200101516113a487610a3b565b6113ae9190611882565b965073ffffffffffffffffffffffffffffffffffffffff8616156113d35760006113d5565b895b9350838711156113ee576113ee868d61026d878b611882565b8d8d8281811061140057611400611a0c565b90506020028101906114129190611a3b565b611423906060810190604001611a79565b945061142e85610a3b565b925073ffffffffffffffffffffffffffffffffffffffff851615611453576000611455565b895b9150818311801561149257508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156114a6576114a6858d61026d8587611882565b6114af81611a9b565b90506112f0565b5050505050505050505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d156001600051141716610fe45760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d156001600051141716610fe457633e3f8f736000526004601cfd5b8051602082018181fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156115ad576115ad61155a565b60405290565b600082601f8301126115c457600080fd5b813567ffffffffffffffff808211156115df576115df61155a565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156116255761162561155a565b8160405283815286602085880101111561163e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461168257600080fd5b919050565b8035801515811461168257600080fd5b600061014082840312156116aa57600080fd5b6116b2611589565b905081358152602082013567ffffffffffffffff808211156116d357600080fd5b6116df858386016115b3565b602084015260408401359150808211156116f857600080fd5b50611705848285016115b3565b6040830152506117176060830161165e565b60608201526117286080830161165e565b608082015261173960a0830161165e565b60a082015260c082013560c082015260e082013560e0820152610100611760818401611687565b90820152610120611772838201611687565b9082015292915050565b60006020828403121561178e57600080fd5b813567ffffffffffffffff8111156117a557600080fd5b6117b184828501611697565b949350505050565b6000806000604084860312156117ce57600080fd5b833567ffffffffffffffff808211156117e657600080fd5b6117f287838801611697565b9450602086013591508082111561180857600080fd5b818601915086601f83011261181c57600080fd5b81358181111561182b57600080fd5b8760208260051b850101111561184057600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610a8057610a80611853565b6000815180845260005b818110156118bb5760208185018101518683018201520161189f565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152611922610160850183611895565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261195d8382611895565b9250506060850151611987608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206119fa8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611a6f57600080fd5b9190910192915050565b600060208284031215611a8b57600080fd5b611a948261165e565b9392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611acc57611acc611853565b5060010190565b600060208284031215611ae557600080fd5b611a9482611687565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b2357600080fd5b83018035915067ffffffffffffffff821115611b3e57600080fd5b602001915036819003821315611b5357600080fd5b9250929050565b60008085851115611b6a57600080fd5b83861115611b7757600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611bc45780818660040360031b1b83161692505b505092915050565b600060208284031215611bde57600080fd5b5051919050565b818382376000910190815291905056fea2646970667358221220bf724ec2c9d02922705906f07966d73de33c2013cef8fc6bfdfa2b8c9a30da7864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_foreignOmniBridge";
            readonly type: "address";
            readonly internalType: "contract IOmniBridge";
        }, {
            readonly name: "_wethOmniBridge";
            readonly type: "address";
            readonly internalType: "contract IOmniBridge";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaOmniBridge";
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
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaOmniBridge";
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
    static createInterface(): OmniBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OmniBridgeFacet;
}
export {};
