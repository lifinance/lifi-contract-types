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
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611be6806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063c318eeda1161005b578063c318eeda146100ec578063d53482cf14610147578063ee0aa3201461016a578063f58ae2ce1461019057600080fd5b8063070e81f114610082578063103c5200146100ab5780637f99d7af146100cc575b600080fd5b610095610090366004610bcf565b6101a3565b6040516100a29190610d6c565b60405180910390f35b6100be6100b9366004610bcf565b6101c9565b6040516100a2929190610e74565b6100df6100da366004610bcf565b610265565b6040516100a29190610ea2565b6100ff6100fa366004610bcf565b6102d8565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681526020810195909552928516928401929092529092166060820152608081019190915260a0016100a2565b61015a610155366004610efa565b610382565b60405190151581526020016100a2565b61017d610178366004610bcf565b610613565b6040516100a29796959493929190610fc3565b61015a61019e366004611021565b61078f565b60606101b282600481866110bb565b8101906101bf91906114c0565b9150505b92915050565b604080516101408101825260008082526060602083018190529282018390528282018190526080820181905260a0820181905260c0820181905260e0820181905261010082018190526101208201529061022683600481876110bb565b810190610233919061151a565b91508161010001511561025e5761024d83600481876110bb565b81019061025a91906114c0565b9150505b9250929050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526102c482600481866110bb565b8101906102d1919061151a565b9392505050565b60008080808060606102ed876004818b6110bb565b8101906102fa9190611557565b80519299509096509450849350600092501515905061031b5761031b611606565b60200260200101516040015195508060008151811061033c5761033c611606565b602002602001015160800151945080600182516103599190611635565b8151811061036957610369611606565b6020026020010151606001519250509295509295909350565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526103dd8c8c610613565b1515610120880152151561010087015260e086015260c085015273ffffffffffffffffffffffffffffffffffffffff90811660a085015216608083015260208083019190915260408051600081529182018082528251902091610444918d918d910161166f565b6040516020818303038152906040528051906020012014806104b75750898960405160200161047492919061166f565b60405160208183030381529060405280519060200120816020015160405160200161049f919061167f565b60405160208183030381529060405280519060200120145b8015610511575073ffffffffffffffffffffffffffffffffffffffff808916148061051157508773ffffffffffffffffffffffffffffffffffffffff16816080015173ffffffffffffffffffffffffffffffffffffffff16145b801561056b575073ffffffffffffffffffffffffffffffffffffffff808816148061056b57508673ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff16145b80156105a357507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8614806105a35750858160c00151145b80156105db57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8514806105db5750848160e00151145b80156105ef57508315158161010001511515145b801561060357508215158161012001511515145b9c9b505050505050505050505050565b60606000806000806000806106bd604051806101400160405280600080191681526020016060815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000151581526020016000151581525090565b6106ca896004818d6110bb565b8101906106d7919061151a565b90508061010001511561074e5760606106f38a6004818e6110bb565b81019061070091906114c0565b9050809150508060008151811061071957610719611606565b60200260200101516040015197508060008151811061073a5761073a611606565b60200260200101516080015195505061075d565b806080015196508060c0015194505b602081015160a082015160e083015161010084015161012090940151929d999c50909a50959850949690955092505050565b60008061079e8789018961169b565b90507f4af96f8f000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000082160161087c5760006107f8886004818c6110bb565b8101906108059190611786565b915050806000015180519060200120858560405161082492919061166f565b60405180910390201480156108735750602081015173ffffffffffffffffffffffffffffffffffffffff1661085b878901896117e0565b73ffffffffffffffffffffffffffffffffffffffff16145b92505050610b83565b7fedc33ee9000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008216016109015760006108d4886004818c6110bb565b8101906108e191906117fd565b92505050806000015180519060200120858560405161082492919061166f565b7f41e15319000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008216016109c3576000610959886004818c6110bb565b8101906109669190611938565b9150508060e0015180519060200120858560405161098592919061166f565b604051809103902014801561087357508060c001518051906020012087876040516109b192919061166f565b60405180910390201492505050610b83565b7f12e879e7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610a48576000610a1b886004818c6110bb565b810190610a289190611992565b925050508060e0015180519060200120858560405161098592919061166f565b7ffaf6a213000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610af8576000610aa0886004818c6110bb565b810190610aad9190611ad8565b9150508060600151805190602001208585604051610acc92919061166f565b6040518091039020148015610873575080604001518051906020012087876040516109b192919061166f565b7f4f93ad26000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610b7d576000610b50886004818c6110bb565b810190610b5d9190611b32565b925050508060600151805190602001208585604051610acc92919061166f565b60009150505b9695505050505050565b60008083601f840112610b9f57600080fd5b50813567ffffffffffffffff811115610bb757600080fd5b60208301915083602082850101111561025e57600080fd5b60008060208385031215610be257600080fd5b823567ffffffffffffffff811115610bf957600080fd5b610c0585828601610b8d565b90969095509350505050565b60005b83811015610c2c578181015183820152602001610c14565b50506000910152565b60008151808452610c4d816020860160208601610c11565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b84811015610d5f577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08684030189528151805173ffffffffffffffffffffffffffffffffffffffff908116855285820151811686860152604080830151821690860152606080830151909116908501526080808201519085015260a08082015160e08287018190529190610d3283880182610c35565b9250505060c0808301519250610d4b8187018415159052565b509985019993505090830190600101610c9c565b5090979650505050505050565b6020815260006102d16020830184610c7f565b6000610140825184526020830151816020860152610d9f82860182610c35565b91505060408301518482036040860152610db98282610c35565b9150506060830151610de3606086018273ffffffffffffffffffffffffffffffffffffffff169052565b506080830151610e0b608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a0830151610e3360a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e085015261010080840151610e5c8287018215159052565b50506101209283015115159390920192909252919050565b604081526000610e876040830185610d7f565b8281036020840152610e998185610c7f565b95945050505050565b6020815260006102d16020830184610d7f565b73ffffffffffffffffffffffffffffffffffffffff81168114610ed757600080fd5b50565b8035610ee581610eb5565b919050565b80358015158114610ee557600080fd5b6000806000806000806000806000806101008b8d031215610f1a57600080fd5b8a3567ffffffffffffffff80821115610f3257600080fd5b610f3e8e838f01610b8d565b909c509a5060208d0135915080821115610f5757600080fd5b50610f648d828e01610b8d565b90995097505060408b0135610f7881610eb5565b955060608b0135610f8881610eb5565b945060808b0135935060a08b01359250610fa460c08c01610eea565b9150610fb260e08c01610eea565b90509295989b9194979a5092959850565b60e081526000610fd660e083018a610c35565b73ffffffffffffffffffffffffffffffffffffffff988916602084015296909716604082015260608101949094526080840192909252151560a0830152151560c09091015292915050565b6000806000806000806060878903121561103a57600080fd5b863567ffffffffffffffff8082111561105257600080fd5b61105e8a838b01610b8d565b9098509650602089013591508082111561107757600080fd5b6110838a838b01610b8d565b9096509450604089013591508082111561109c57600080fd5b506110a989828a01610b8d565b979a9699509497509295939492505050565b600080858511156110cb57600080fd5b838611156110d857600080fd5b5050820193919092039150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611138576111386110e5565b60405290565b60405160e0810167ffffffffffffffff81118282101715611138576111386110e5565b60405160c0810167ffffffffffffffff81118282101715611138576111386110e5565b604051610100810167ffffffffffffffff81118282101715611138576111386110e5565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156111ef576111ef6110e5565b604052919050565b600082601f83011261120857600080fd5b813567ffffffffffffffff811115611222576112226110e5565b61125360207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016111a8565b81815284602083860101111561126857600080fd5b816020850160208301376000918101602001919091529392505050565b6000610140828403121561129857600080fd5b6112a0611114565b905081358152602082013567ffffffffffffffff808211156112c157600080fd5b6112cd858386016111f7565b602084015260408401359150808211156112e657600080fd5b506112f3848285016111f7565b60408301525061130560608301610eda565b606082015261131660808301610eda565b608082015261132760a08301610eda565b60a082015260c082013560c082015260e082013560e082015261010061134e818401610eea565b90820152610120611360838201610eea565b9082015292915050565b600082601f83011261137b57600080fd5b8135602067ffffffffffffffff80831115611398576113986110e5565b8260051b6113a78382016111a8565b93845285810183019383810190888611156113c157600080fd5b84880192505b858310156114b4578235848111156113df5760008081fd5b880160e0818b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018113156114155760008081fd5b61141d61113e565b611428888401610eda565b81526040611437818501610eda565b898301526060611448818601610eda565b828401526080915061145b828601610eda565b818401525060a0808501358284015260c0915081850135898111156114805760008081fd5b61148e8f8c838901016111f7565b82850152505061149f838501610eea565b908201528452505091840191908401906113c7565b98975050505050505050565b600080604083850312156114d357600080fd5b823567ffffffffffffffff808211156114eb57600080fd5b6114f786838701611285565b9350602085013591508082111561150d57600080fd5b5061025a8582860161136a565b60006020828403121561152c57600080fd5b813567ffffffffffffffff81111561154357600080fd5b61154f84828501611285565b949350505050565b60008060008060008060c0878903121561157057600080fd5b86359550602087013567ffffffffffffffff8082111561158f57600080fd5b61159b8a838b016111f7565b965060408901359150808211156115b157600080fd5b6115bd8a838b016111f7565b9550606089013591506115cf82610eb5565b9093506080880135925060a088013590808211156115ec57600080fd5b506115f989828a0161136a565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b818103818111156101c3577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8183823760009101908152919050565b60008251611691818460208701610c11565b9190910192915050565b6000602082840312156116ad57600080fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146102d157600080fd5b803563ffffffff81168114610ee557600080fd5b600060c0828403121561170357600080fd5b61170b611161565b9050813567ffffffffffffffff81111561172457600080fd5b611730848285016111f7565b825250602082013561174181610eb5565b806020830152506040820135604082015260608201356060820152608082013561176a81610eb5565b608082015261177b60a083016116dd565b60a082015292915050565b6000806040838503121561179957600080fd5b823567ffffffffffffffff808211156117b157600080fd5b6117bd86838701611285565b935060208501359150808211156117d357600080fd5b5061025a858286016116f1565b6000602082840312156117f257600080fd5b81356102d181610eb5565b60008060006060848603121561181257600080fd5b833567ffffffffffffffff8082111561182a57600080fd5b61183687838801611285565b9450602086013591508082111561184c57600080fd5b6118588783880161136a565b9350604086013591508082111561186e57600080fd5b5061187b868287016116f1565b9150509250925092565b6000610100828403121561189857600080fd5b6118a0611184565b905081358152602082013560208201526040820135604082015260608201356060820152608082013560808201526118da60a08301610eda565b60a082015260c082013567ffffffffffffffff808211156118fa57600080fd5b611906858386016111f7565b60c084015260e084013591508082111561191f57600080fd5b5061192c848285016111f7565b60e08301525092915050565b6000806040838503121561194b57600080fd5b823567ffffffffffffffff8082111561196357600080fd5b61196f86838701611285565b9350602085013591508082111561198557600080fd5b5061025a85828601611885565b6000806000606084860312156119a757600080fd5b833567ffffffffffffffff808211156119bf57600080fd5b6119cb87838801611285565b945060208601359150808211156119e157600080fd5b6119ed8783880161136a565b93506040860135915080821115611a0357600080fd5b5061187b86828701611885565b803567ffffffffffffffff81168114610ee557600080fd5b803560078110610ee557600080fd5b600060c08284031215611a4957600080fd5b611a51611161565b9050611a5c826116dd565b8152611a6a60208301611a10565b6020820152604082013567ffffffffffffffff80821115611a8a57600080fd5b611a96858386016111f7565b60408401526060840135915080821115611aaf57600080fd5b50611abc848285016111f7565b6060830152506080820135608082015261177b60a08301611a28565b60008060408385031215611aeb57600080fd5b823567ffffffffffffffff80821115611b0357600080fd5b611b0f86838701611285565b93506020850135915080821115611b2557600080fd5b5061025a85828601611a37565b600080600060608486031215611b4757600080fd5b833567ffffffffffffffff80821115611b5f57600080fd5b611b6b87838801611285565b94506020860135915080821115611b8157600080fd5b611b8d8783880161136a565b93506040860135915080821115611ba357600080fd5b5061187b86828701611a3756fea26469706673582212205b02622044c92a42b9ca7b1add97bab94566b2e211718380ed359ab54814ac0f64736f6c63430008110033";
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
