import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CalldataVerificationFacet, CalldataVerificationFacetInterface } from "../CalldataVerificationFacet";
declare type CalldataVerificationFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CalldataVerificationFacet__factory extends ContractFactory {
    constructor(...args: CalldataVerificationFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CalldataVerificationFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CalldataVerificationFacet;
    connect(signer: Signer): CalldataVerificationFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611b88806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063c318eeda1161005b578063c318eeda146100ec578063d53482cf14610147578063ee0aa3201461016a578063f58ae2ce1461019057600080fd5b8063070e81f114610082578063103c5200146100ab5780637f99d7af146100cc575b600080fd5b610095610090366004610b53565b6101a3565b6040516100a29190610cf0565b60405180910390f35b6100be6100b9366004610b53565b6101b6565b6040516100a2929190610df8565b6100df6100da366004610b53565b610231565b6040516100a29190610e26565b6100ff6100fa366004610b53565b61028d565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681526020810195909552928516928401929092529092166060820152608081019190915260a0016100a2565b61015a610155366004610e7e565b610337565b60405190151581526020016100a2565b61017d610178366004610b53565b6105c8565b6040516100a29796959493929190610f47565b61015a61019e366004610fa5565b610683565b60606101af8383610a81565b9392505050565b604080516101408101825260008082526060602083018190529282018390528282018190526080820181905260a0820181905260c0820181905260e082018190526101008201819052610120820152906102108484610aa5565b91508161010001511561022a576102278484610a81565b90505b9250929050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526101af8383610aa5565b60008080808060606102a2876004818b61103f565b8101906102af919061135f565b8051929950909650945084935060009250151590506102d0576102d061140e565b6020026020010151604001519550806000815181106102f1576102f161140e565b6020026020010151608001519450806001825161030e919061143d565b8151811061031e5761031e61140e565b6020026020010151606001519250509295509295909350565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526103928c8c6105c8565b1515610120880152151561010087015260e086015260c085015273ffffffffffffffffffffffffffffffffffffffff90811660a0850152166080830152602080830191909152604080516000815291820180825282519020916103f9918d918d910161147d565b60405160208183030381529060405280519060200120148061046c5750898960405160200161042992919061147d565b604051602081830303815290604052805190602001208160200151604051602001610454919061148d565b60405160208183030381529060405280519060200120145b80156104c6575073ffffffffffffffffffffffffffffffffffffffff80891614806104c657508773ffffffffffffffffffffffffffffffffffffffff16816080015173ffffffffffffffffffffffffffffffffffffffff16145b8015610520575073ffffffffffffffffffffffffffffffffffffffff808816148061052057508673ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff16145b801561055857507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8614806105585750858160c00151145b801561059057507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8514806105905750848160e00151145b80156105a457508315158161010001511515145b80156105b857508215158161012001511515145b9c9b505050505050505050505050565b606060008060008060008060006105df8a8a610aa5565b9050806101000151156106425760006105f88b8b610a81565b90508060008151811061060d5761060d61140e565b60200260200101516040015197508060008151811061062e5761062e61140e565b602002602001015160800151955050610651565b806080015196508060c0015194505b602081015160a082015160e083015161010084015161012090940151929d999c50909a50959850949690955092505050565b600080610692878901896114a9565b90507f72366cd3000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008216016107705760006106ec886004818c61103f565b8101906106f99190611684565b915050806000015180519060200120858560405161071892919061147d565b60405180910390201480156107675750602081015173ffffffffffffffffffffffffffffffffffffffff1661074f878901896116e8565b73ffffffffffffffffffffffffffffffffffffffff16145b92505050610a77565b7f7c0ce6e9000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008216016107f55760006107c8886004818c61103f565b8101906107d59190611705565b92505050806000015180519060200120858560405161071892919061147d565b7f41e15319000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008216016108b757600061084d886004818c61103f565b81019061085a9190611840565b9150508060e0015180519060200120858560405161087992919061147d565b604051809103902014801561076757508060c001518051906020012087876040516108a592919061147d565b60405180910390201492505050610a77565b7f12e879e7000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000082160161093c57600061090f886004818c61103f565b81019061091c919061189a565b925050508060e0015180519060200120858560405161087992919061147d565b7ffaf6a213000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008216016109ec576000610994886004818c61103f565b8101906109a191906119eb565b91505080606001518051906020012085856040516109c092919061147d565b6040518091039020148015610767575080604001518051906020012087876040516108a592919061147d565b7f4f93ad26000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610a71576000610a44886004818c61103f565b810190610a519190611a45565b9250505080606001518051906020012085856040516109c092919061147d565b60009150505b9695505050505050565b6060610a90826004818661103f565b810190610a9d9190611ac3565b949350505050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152610b04826004818661103f565b8101906101af9190611b1d565b60008083601f840112610b2357600080fd5b50813567ffffffffffffffff811115610b3b57600080fd5b60208301915083602082850101111561022a57600080fd5b60008060208385031215610b6657600080fd5b823567ffffffffffffffff811115610b7d57600080fd5b610b8985828601610b11565b90969095509350505050565b60005b83811015610bb0578181015183820152602001610b98565b50506000910152565b60008151808452610bd1816020860160208601610b95565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b84811015610ce3577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08684030189528151805173ffffffffffffffffffffffffffffffffffffffff908116855285820151811686860152604080830151821690860152606080830151909116908501526080808201519085015260a08082015160e08287018190529190610cb683880182610bb9565b9250505060c0808301519250610ccf8187018415159052565b509985019993505090830190600101610c20565b5090979650505050505050565b6020815260006101af6020830184610c03565b6000610140825184526020830151816020860152610d2382860182610bb9565b91505060408301518482036040860152610d3d8282610bb9565b9150506060830151610d67606086018273ffffffffffffffffffffffffffffffffffffffff169052565b506080830151610d8f608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a0830151610db760a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e085015261010080840151610de08287018215159052565b50506101209283015115159390920192909252919050565b604081526000610e0b6040830185610d03565b8281036020840152610e1d8185610c03565b95945050505050565b6020815260006101af6020830184610d03565b73ffffffffffffffffffffffffffffffffffffffff81168114610e5b57600080fd5b50565b8035610e6981610e39565b919050565b80358015158114610e6957600080fd5b6000806000806000806000806000806101008b8d031215610e9e57600080fd5b8a3567ffffffffffffffff80821115610eb657600080fd5b610ec28e838f01610b11565b909c509a5060208d0135915080821115610edb57600080fd5b50610ee88d828e01610b11565b90995097505060408b0135610efc81610e39565b955060608b0135610f0c81610e39565b945060808b0135935060a08b01359250610f2860c08c01610e6e565b9150610f3660e08c01610e6e565b90509295989b9194979a5092959850565b60e081526000610f5a60e083018a610bb9565b73ffffffffffffffffffffffffffffffffffffffff988916602084015296909716604082015260608101949094526080840192909252151560a0830152151560c09091015292915050565b60008060008060008060608789031215610fbe57600080fd5b863567ffffffffffffffff80821115610fd657600080fd5b610fe28a838b01610b11565b90985096506020890135915080821115610ffb57600080fd5b6110078a838b01610b11565b9096509450604089013591508082111561102057600080fd5b5061102d89828a01610b11565b979a9699509497509295939492505050565b6000808585111561104f57600080fd5b8386111561105c57600080fd5b5050820193919092039150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff811182821017156110bb576110bb611069565b60405290565b604051610140810167ffffffffffffffff811182821017156110bb576110bb611069565b604051610100810167ffffffffffffffff811182821017156110bb576110bb611069565b60405160c0810167ffffffffffffffff811182821017156110bb576110bb611069565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561117357611173611069565b604052919050565b600082601f83011261118c57600080fd5b813567ffffffffffffffff8111156111a6576111a6611069565b6111d760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161112c565b8181528460208386010111156111ec57600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f83011261121a57600080fd5b8135602067ffffffffffffffff8083111561123757611237611069565b8260051b61124683820161112c565b938452858101830193838101908886111561126057600080fd5b84880192505b858310156113535782358481111561127e5760008081fd5b880160e0818b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018113156112b45760008081fd5b6112bc611098565b6112c7888401610e5e565b815260406112d6818501610e5e565b8983015260606112e7818601610e5e565b82840152608091506112fa828601610e5e565b818401525060a0808501358284015260c09150818501358981111561131f5760008081fd5b61132d8f8c8389010161117b565b82850152505061133e838501610e6e565b90820152845250509184019190840190611266565b98975050505050505050565b60008060008060008060c0878903121561137857600080fd5b86359550602087013567ffffffffffffffff8082111561139757600080fd5b6113a38a838b0161117b565b965060408901359150808211156113b957600080fd5b6113c58a838b0161117b565b9550606089013591506113d782610e39565b9093506080880135925060a088013590808211156113f457600080fd5b5061140189828a01611209565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b81810381811115611477577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b92915050565b8183823760009101908152919050565b6000825161149f818460208701610b95565b9190910192915050565b6000602082840312156114bb57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146101af57600080fd5b600061014082840312156114fe57600080fd5b6115066110c1565b905081358152602082013567ffffffffffffffff8082111561152757600080fd5b6115338583860161117b565b6020840152604084013591508082111561154c57600080fd5b506115598482850161117b565b60408301525061156b60608301610e5e565b606082015261157c60808301610e5e565b608082015261158d60a08301610e5e565b60a082015260c082013560c082015260e082013560e08201526101006115b4818401610e6e565b908201526101206115c6838201610e6e565b9082015292915050565b803563ffffffff81168114610e6957600080fd5b600060e082840312156115f657600080fd5b6115fe611098565b9050813567ffffffffffffffff81111561161757600080fd5b6116238482850161117b565b82525061163260208301610e5e565b6020820152604082013560408201526060820135606082015261165760808301610e5e565b608082015261166860a083016115d0565b60a082015261167960c08301610e6e565b60c082015292915050565b6000806040838503121561169757600080fd5b823567ffffffffffffffff808211156116af57600080fd5b6116bb868387016114eb565b935060208501359150808211156116d157600080fd5b506116de858286016115e4565b9150509250929050565b6000602082840312156116fa57600080fd5b81356101af81610e39565b60008060006060848603121561171a57600080fd5b833567ffffffffffffffff8082111561173257600080fd5b61173e878388016114eb565b9450602086013591508082111561175457600080fd5b61176087838801611209565b9350604086013591508082111561177657600080fd5b50611783868287016115e4565b9150509250925092565b600061010082840312156117a057600080fd5b6117a86110e5565b905081358152602082013560208201526040820135604082015260608201356060820152608082013560808201526117e260a08301610e5e565b60a082015260c082013567ffffffffffffffff8082111561180257600080fd5b61180e8583860161117b565b60c084015260e084013591508082111561182757600080fd5b506118348482850161117b565b60e08301525092915050565b6000806040838503121561185357600080fd5b823567ffffffffffffffff8082111561186b57600080fd5b611877868387016114eb565b9350602085013591508082111561188d57600080fd5b506116de8582860161178d565b6000806000606084860312156118af57600080fd5b833567ffffffffffffffff808211156118c757600080fd5b6118d3878388016114eb565b945060208601359150808211156118e957600080fd5b6118f587838801611209565b9350604086013591508082111561190b57600080fd5b506117838682870161178d565b803567ffffffffffffffff81168114610e6957600080fd5b803560078110610e6957600080fd5b600060c0828403121561195157600080fd5b611959611109565b9050611964826115d0565b815261197260208301611918565b6020820152604082013567ffffffffffffffff8082111561199257600080fd5b61199e8583860161117b565b604084015260608401359150808211156119b757600080fd5b506119c48482850161117b565b606083015250608082013560808201526119e060a08301611930565b60a082015292915050565b600080604083850312156119fe57600080fd5b823567ffffffffffffffff80821115611a1657600080fd5b611a22868387016114eb565b93506020850135915080821115611a3857600080fd5b506116de8582860161193f565b600080600060608486031215611a5a57600080fd5b833567ffffffffffffffff80821115611a7257600080fd5b611a7e878388016114eb565b94506020860135915080821115611a9457600080fd5b611aa087838801611209565b93506040860135915080821115611ab657600080fd5b506117838682870161193f565b60008060408385031215611ad657600080fd5b823567ffffffffffffffff80821115611aee57600080fd5b611afa868387016114eb565b93506020850135915080821115611b1057600080fd5b506116de85828601611209565b600060208284031215611b2f57600080fd5b813567ffffffffffffffff811115611b4657600080fd5b610a9d848285016114eb56fea2646970667358221220dbc60e149f7246a9ec776f3debc45a2f971ab1ae6091efcf613b8f838679e39e64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "extractBridgeData";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "extractData";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fromAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "requiresDeposit";
                readonly type: "bool";
            }];
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly name: "swapData";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "extractGenericSwapParameters";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "sendingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "receivingAmount";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "extractMainParameters";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "bridge";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "sendingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "hasSourceSwaps";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "hasDestinationCall";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "extractSwapData";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fromAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "requiresDeposit";
                readonly type: "bool";
            }];
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly name: "swapData";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "string";
            readonly name: "bridge";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "sendingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "hasSourceSwaps";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "hasDestinationCall";
            readonly type: "bool";
        }];
        readonly name: "validateCalldata";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isValid";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "callTo";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "dstCalldata";
            readonly type: "bytes";
        }];
        readonly name: "validateDestinationCalldata";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isValid";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): CalldataVerificationFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CalldataVerificationFacet;
}
export {};
