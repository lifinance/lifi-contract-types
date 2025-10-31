import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CalldataVerificationFacet, CalldataVerificationFacetInterface } from "../CalldataVerificationFacet";
type CalldataVerificationFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611de1806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063d53482cf1161005b578063d53482cf14610152578063df1c3a5b14610175578063ee0aa32014610196578063f58ae2ce146101bc57600080fd5b8063070e81f11461008d578063103c5200146100b65780637f99d7af146100d7578063c318eeda146100f7575b600080fd5b6100a061009b366004610de7565b6101cf565b6040516100ad9190610f84565b60405180910390f35b6100c96100c4366004610de7565b6101e2565b6040516100ad92919061108c565b6100ea6100e5366004610de7565b61025d565b6040516100ad91906110ba565b61010a610105366004610de7565b6102b9565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681526020810195909552928516928401929092529092166060820152608081019190915260a0016100ad565b610165610160366004611112565b61055f565b60405190151581526020016100ad565b610188610183366004610de7565b61075e565b6040519081526020016100ad565b6101a96101a4366004610de7565b6107d8565b6040516100ad97969594939291906111db565b6101656101ca366004611239565b610893565b60606101db8383610c55565b9392505050565b604080516101408101825260008082526060602083018190529282018390528282018190526080820181905260a0820181905260c0820181905260e0820181905261010082018190526101208201529061023c8484610c79565b915081610100015115610256576102538484610c55565b90505b9250929050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526101db8383610c79565b6000808080806101e486116102fa576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060600061030b6004828a8c6112d3565b610314916112fd565b90507fffffffff0000000000000000000000000000000000000000000000000000000081167f4666fc800000000000000000000000000000000000000000000000000000000014806103a757507fffffffff0000000000000000000000000000000000000000000000000000000081167f733214a300000000000000000000000000000000000000000000000000000000145b806103f357507fffffffff0000000000000000000000000000000000000000000000000000000081167faf7060fd00000000000000000000000000000000000000000000000000000000145b156104bf5760408051600180825281830190925290816020015b6040805160e0810182526000808252602080830182905292820181905260608083018290526080830182905260a083015260c082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90920191018161040d579050509150610482886004818c6112d3565b81019061048f9190611568565b8751929550909350915085906000906104aa576104aa611617565b602090810291909101015290955092506104e4565b6104cc886004818c6112d3565b8101906104d991906116e5565b919950965094505050505b816000815181106104f7576104f7611617565b60200260200101516040015196508160008151811061051857610518611617565b602002602001015160800151955081600183516105359190611787565b8151811061054557610545611617565b602002602001015160600151935050509295509295909350565b60008061056c8c8c610c79565b905060008a8a6040516020016105839291906117c1565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152828252805160209182012060008452908301918290529151902090915081148061060157508082602001516040516020016105e991906117d1565b60405160208183030381529060405280519060200120145b801561065b575073ffffffffffffffffffffffffffffffffffffffff808a16148061065b57508873ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16145b80156106b5575073ffffffffffffffffffffffffffffffffffffffff80891614806106b557508773ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16145b80156106ed57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8714806106ed5750868260c00151145b801561072557507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8614806107255750858260e00151145b801561073957508415158261010001511515145b801561074d57508315158261012001511515145b9d9c50505050505050505050505050565b60008083838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293506107a79250869150859050610c79565b6101000151156107c357606481015181016024015191506107d1565b604481015181016024015191505b5092915050565b606060008060008060008060006107ef8a8a610c79565b9050806101000151156108525760006108088b8b610c55565b90508060008151811061081d5761081d611617565b60200260200101516040015197508060008151811061083e5761083e611617565b602002602001015160800151955050610861565b806080015196508060c0015194505b602081015160a082015160e083015161010084015161012090940151929d999c50909a50959850949690955092505050565b6000806108a3600482898b6112d3565b6108ac916112fd565b90507feb2acf89000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610995576000610906886004818c6112d3565b8101906109139190611a62565b915050806020015160a001518051906020012085856040516109369291906117c1565b604051809103902014801561098c575061098c87878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050506020838101510151610ce5565b92505050610c4b565b7f59fef59a000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610a1e5760006109ed886004818c6112d3565b8101906109fa9190611ac6565b92505050806020015160a001518051906020012085856040516109369291906117c1565b7fd733bcea000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610b0f576000610a76886004818c6112d3565b810190610a839190611c44565b915050806101200151805190602001208585604051610aa39291906117c1565b604051809103902014801561098c575080516040805173ffffffffffffffffffffffffffffffffffffffff909216602083015201604051602081830303815290604052805190602001208787604051610afd9291906117c1565b60405180910390201492505050610c4b565b7fd77cd343000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610b95576000610b67886004818c6112d3565b810190610b749190611c9e565b92505050806101200151805190602001208585604051610aa39291906117c1565b7fd733bcea000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610bed576000610a76886004818c6112d3565b7fd77cd343000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610c45576000610b67886004818c6112d3565b60009150505b9695505050505050565b6060610c6482600481866112d3565b810190610c719190611d1c565b949350505050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152610cd882600481866112d3565b8101906101db9190611d76565b6000601483511015610d7d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f496e76616c69642063616c6c546f206c656e6774683b2065787065637465642060448201527f6174206c65617374203230206279746573000000000000000000000000000000606482015260840160405180910390fd5b50602082015173ffffffffffffffffffffffffffffffffffffffff8281169116145b92915050565b60008083601f840112610db757600080fd5b50813567ffffffffffffffff811115610dcf57600080fd5b60208301915083602082850101111561025657600080fd5b60008060208385031215610dfa57600080fd5b823567ffffffffffffffff811115610e1157600080fd5b610e1d85828601610da5565b90969095509350505050565b60005b83811015610e44578181015183820152602001610e2c565b50506000910152565b60008151808452610e65816020860160208601610e29565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b84811015610f77577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08684030189528151805173ffffffffffffffffffffffffffffffffffffffff908116855285820151811686860152604080830151821690860152606080830151909116908501526080808201519085015260a08082015160e08287018190529190610f4a83880182610e4d565b9250505060c0808301519250610f638187018415159052565b509985019993505090830190600101610eb4565b5090979650505050505050565b6020815260006101db6020830184610e97565b6000610140825184526020830151816020860152610fb782860182610e4d565b91505060408301518482036040860152610fd18282610e4d565b9150506060830151610ffb606086018273ffffffffffffffffffffffffffffffffffffffff169052565b506080830151611023608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a083015161104b60a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e0850152610100808401516110748287018215159052565b50506101209283015115159390920192909252919050565b60408152600061109f6040830185610f97565b82810360208401526110b18185610e97565b95945050505050565b6020815260006101db6020830184610f97565b73ffffffffffffffffffffffffffffffffffffffff811681146110ef57600080fd5b50565b80356110fd816110cd565b919050565b803580151581146110fd57600080fd5b6000806000806000806000806000806101008b8d03121561113257600080fd5b8a3567ffffffffffffffff8082111561114a57600080fd5b6111568e838f01610da5565b909c509a5060208d013591508082111561116f57600080fd5b5061117c8d828e01610da5565b90995097505060408b0135611190816110cd565b955060608b01356111a0816110cd565b945060808b0135935060a08b013592506111bc60c08c01611102565b91506111ca60e08c01611102565b90509295989b9194979a5092959850565b60e0815260006111ee60e083018a610e4d565b73ffffffffffffffffffffffffffffffffffffffff988916602084015296909716604082015260608101949094526080840192909252151560a0830152151560c09091015292915050565b6000806000806000806060878903121561125257600080fd5b863567ffffffffffffffff8082111561126a57600080fd5b6112768a838b01610da5565b9098509650602089013591508082111561128f57600080fd5b61129b8a838b01610da5565b909650945060408901359150808211156112b457600080fd5b506112c189828a01610da5565b979a9699509497509295939492505050565b600080858511156112e357600080fd5b838611156112f057600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561133d5780818660040360031b1b83161692505b505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561139757611397611345565b60405290565b604051610140810167ffffffffffffffff8111828210171561139757611397611345565b6040516080810167ffffffffffffffff8111828210171561139757611397611345565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561142b5761142b611345565b604052919050565b600082601f83011261144457600080fd5b813567ffffffffffffffff81111561145e5761145e611345565b61148f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016113e4565b8181528460208386010111156114a457600080fd5b816020850160208301376000918101602001919091529392505050565b600060e082840312156114d357600080fd5b6114db611374565b90506114e6826110f2565b81526114f4602083016110f2565b6020820152611505604083016110f2565b6040820152611516606083016110f2565b60608201526080820135608082015260a082013567ffffffffffffffff81111561153f57600080fd5b61154b84828501611433565b60a08301525061155d60c08301611102565b60c082015292915050565b60008060008060008060c0878903121561158157600080fd5b86359550602087013567ffffffffffffffff808211156115a057600080fd5b6115ac8a838b01611433565b965060408901359150808211156115c257600080fd5b6115ce8a838b01611433565b9550606089013591506115e0826110cd565b9093506080880135925060a088013590808211156115fd57600080fd5b5061160a89828a016114c1565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082601f83011261165757600080fd5b8135602067ffffffffffffffff8083111561167457611674611345565b8260051b6116838382016113e4565b938452858101830193838101908886111561169d57600080fd5b84880192505b858310156116d9578235848111156116bb5760008081fd5b6116c98a87838c01016114c1565b83525091840191908401906116a3565b98975050505050505050565b60008060008060008060c087890312156116fe57600080fd5b86359550602087013567ffffffffffffffff8082111561171d57600080fd5b6117298a838b01611433565b9650604089013591508082111561173f57600080fd5b61174b8a838b01611433565b95506060890135915061175d826110cd565b9093506080880135925060a0880135908082111561177a57600080fd5b5061160a89828a01611646565b81810381811115610d9f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8183823760009101908152919050565b600082516117e3818460208701610e29565b9190910192915050565b6000610140828403121561180057600080fd5b61180861139d565b905081358152602082013567ffffffffffffffff8082111561182957600080fd5b61183585838601611433565b6020840152604084013591508082111561184e57600080fd5b5061185b84828501611433565b60408301525061186d606083016110f2565b606082015261187e608083016110f2565b608082015261188f60a083016110f2565b60a082015260c082013560c082015260e082013560e08201526101006118b6818401611102565b908201526101206118c8838201611102565b9082015292915050565b803563ffffffff811681146110fd57600080fd5b6000604082840312156118f857600080fd5b6040516040810181811067ffffffffffffffff8211171561191b5761191b611345565b604052823581526020928301359281019290925250919050565b600060a0828403121561194757600080fd5b61194f6113c1565b9050813561ffff8116811461196357600080fd5b8152602082013567ffffffffffffffff8082111561198057600080fd5b9083019060e0828603121561199457600080fd5b61199c611374565b6119a5836118d2565b81526020830135602082015260408301356040820152606083013560608201526080830135828111156119d757600080fd5b6119e387828601611433565b60808301525060a0830135828111156119fb57600080fd5b611a0787828601611433565b60a08301525060c083013582811115611a1f57600080fd5b611a2b87828601611433565b60c083015250602084015250611a46905083604084016118e6565b6040820152611a57608083016110f2565b606082015292915050565b60008060408385031215611a7557600080fd5b823567ffffffffffffffff80821115611a8d57600080fd5b611a99868387016117ed565b93506020850135915080821115611aaf57600080fd5b50611abc85828601611935565b9150509250929050565b600080600060608486031215611adb57600080fd5b833567ffffffffffffffff80821115611af357600080fd5b611aff878388016117ed565b94506020860135915080821115611b1557600080fd5b611b2187838801611646565b93506040860135915080821115611b3757600080fd5b50611b4486828701611935565b9150509250925092565b803567ffffffffffffffff811681146110fd57600080fd5b60006101408284031215611b7957600080fd5b611b8161139d565b9050611b8c826110f2565b8152611b9a602083016110f2565b6020820152611bab604083016110f2565b604082015260608201356060820152611bc660808301611b4e565b6080820152611bd760a083016110f2565b60a0820152611be860c083016118d2565b60c0820152611bf960e083016118d2565b60e0820152610100611c0c8184016118d2565b908201526101208281013567ffffffffffffffff811115611c2c57600080fd5b611c3885828601611433565b82840152505092915050565b60008060408385031215611c5757600080fd5b823567ffffffffffffffff80821115611c6f57600080fd5b611c7b868387016117ed565b93506020850135915080821115611c9157600080fd5b50611abc85828601611b66565b600080600060608486031215611cb357600080fd5b833567ffffffffffffffff80821115611ccb57600080fd5b611cd7878388016117ed565b94506020860135915080821115611ced57600080fd5b611cf987838801611646565b93506040860135915080821115611d0f57600080fd5b50611b4486828701611b66565b60008060408385031215611d2f57600080fd5b823567ffffffffffffffff80821115611d4757600080fd5b611d53868387016117ed565b93506020850135915080821115611d6957600080fd5b50611abc85828601611646565b600060208284031215611d8857600080fd5b813567ffffffffffffffff811115611d9f57600080fd5b610c71848285016117ed56fea2646970667358221220822b86d372093e8546397a7bf9958d4a6457f5536c8a2e7bd6265aa1f383bee164736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "extractBridgeData";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
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
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "extractData";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
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
            readonly name: "swapData";
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
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "extractGenericSwapParameters";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receivingAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "extractMainParameters";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridge";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
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
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "extractNonEVMAddress";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "nonEVMAddress";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "extractSwapData";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "swapData";
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
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "validateCalldata";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "bridge";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
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
        readonly outputs: readonly [{
            readonly name: "isValid";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "validateDestinationCalldata";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "callTo";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "dstCalldata";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "isValid";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }];
    static createInterface(): CalldataVerificationFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CalldataVerificationFacet;
}
export {};
