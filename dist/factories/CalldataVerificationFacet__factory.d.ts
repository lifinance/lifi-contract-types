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
    static readonly bytecode = "0x608060405234801561001057600080fd5b506120cc806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063d53482cf1161005b578063d53482cf14610152578063df1c3a5b14610175578063ee0aa32014610196578063f58ae2ce146101bc57600080fd5b8063070e81f11461008d578063103c5200146100b65780637f99d7af146100d7578063c318eeda146100f7575b600080fd5b6100a061009b366004610f1c565b6101cf565b6040516100ad91906110b9565b60405180910390f35b6100c96100c4366004610f1c565b6101e2565b6040516100ad9291906111c1565b6100ea6100e5366004610f1c565b61025d565b6040516100ad91906111ef565b61010a610105366004610f1c565b6102b9565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681526020810195909552928516928401929092529092166060820152608081019190915260a0016100ad565b610165610160366004611247565b61055f565b60405190151581526020016100ad565b610188610183366004610f1c565b61075e565b6040519081526020016100ad565b6101a96101a4366004610f1c565b6107d8565b6040516100ad9796959493929190611310565b6101656101ca36600461136e565b610893565b60606101db8383610d8a565b9392505050565b604080516101408101825260008082526060602083018190529282018390528282018190526080820181905260a0820181905260c0820181905260e0820181905261010082018190526101208201529061023c8484610dae565b915081610100015115610256576102538484610d8a565b90505b9250929050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526101db8383610dae565b6000808080806101e486116102fa576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060600061030b6004828a8c611408565b61031491611432565b90507fffffffff0000000000000000000000000000000000000000000000000000000081167f4666fc800000000000000000000000000000000000000000000000000000000014806103a757507fffffffff0000000000000000000000000000000000000000000000000000000081167f733214a300000000000000000000000000000000000000000000000000000000145b806103f357507fffffffff0000000000000000000000000000000000000000000000000000000081167faf7060fd00000000000000000000000000000000000000000000000000000000145b156104bf5760408051600180825281830190925290816020015b6040805160e0810182526000808252602080830182905292820181905260608083018290526080830182905260a083015260c082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90920191018161040d579050509150610482886004818c611408565b81019061048f91906116c0565b8751929550909350915085906000906104aa576104aa61176f565b602090810291909101015290955092506104e4565b6104cc886004818c611408565b8101906104d9919061183d565b919950965094505050505b816000815181106104f7576104f761176f565b6020026020010151604001519650816000815181106105185761051861176f565b6020026020010151608001519550816001835161053591906118df565b815181106105455761054561176f565b602002602001015160600151935050509295509295909350565b60008061056c8c8c610dae565b905060008a8a604051602001610583929190611919565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152828252805160209182012060008452908301918290529151902090915081148061060157508082602001516040516020016105e99190611929565b60405160208183030381529060405280519060200120145b801561065b575073ffffffffffffffffffffffffffffffffffffffff808a16148061065b57508873ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16145b80156106b5575073ffffffffffffffffffffffffffffffffffffffff80891614806106b557508773ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16145b80156106ed57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8714806106ed5750868260c00151145b801561072557507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8614806107255750858260e00151145b801561073957508415158261010001511515145b801561074d57508315158261012001511515145b9d9c50505050505050505050505050565b60008083838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293506107a79250869150859050610dae565b6101000151156107c357606481015181016024015191506107d1565b604481015181016024015191505b5092915050565b606060008060008060008060006107ef8a8a610dae565b9050806101000151156108525760006108088b8b610d8a565b90508060008151811061081d5761081d61176f565b60200260200101516040015197508060008151811061083e5761083e61176f565b602002602001015160800151955050610861565b806080015196508060c0015194505b602081015160a082015160e083015161010084015161012090940151929d999c50909a50959850949690955092505050565b6000806108a3600482898b611408565b6108ac91611432565b90507feb2acf89000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610995576000610906886004818c611408565b8101906109139190611bba565b915050806020015160a00151805190602001208585604051610936929190611919565b604051809103902014801561098c575061098c87878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152505050506020838101510151610e1a565b92505050610d80565b7f59fef59a000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610a1e5760006109ed886004818c611408565b8101906109fa9190611c1e565b92505050806020015160a00151805190602001208585604051610936929190611919565b7ffaf6a213000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610ae0576000610a76886004818c611408565b810190610a839190611d79565b9150508060600151805190602001208585604051610aa2929190611919565b604051809103902014801561098c57508060400151805190602001208787604051610ace929190611919565b60405180910390201492505050610d80565b7f4f93ad26000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610b65576000610b38886004818c611408565b810190610b459190611dd3565b925050508060600151805190602001208585604051610aa2929190611919565b7fd733bcea000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610c44576000610bbd886004818c611408565b810190610bca9190611f2f565b915050806101200151805190602001208585604051610bea929190611919565b604051809103902014801561098c575080516040805173ffffffffffffffffffffffffffffffffffffffff909216602083015201604051602081830303815290604052805190602001208787604051610ace929190611919565b7fd77cd343000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610cca576000610c9c886004818c611408565b810190610ca99190611f89565b92505050806101200151805190602001208585604051610bea929190611919565b7fd733bcea000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610d22576000610bbd886004818c611408565b7fd77cd343000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610d7a576000610c9c886004818c611408565b60009150505b9695505050505050565b6060610d998260048186611408565b810190610da69190612007565b949350505050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152610e0d8260048186611408565b8101906101db9190612061565b6000601483511015610eb2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f496e76616c69642063616c6c546f206c656e6774683b2065787065637465642060448201527f6174206c65617374203230206279746573000000000000000000000000000000606482015260840160405180910390fd5b50602082015173ffffffffffffffffffffffffffffffffffffffff8281169116145b92915050565b60008083601f840112610eec57600080fd5b50813567ffffffffffffffff811115610f0457600080fd5b60208301915083602082850101111561025657600080fd5b60008060208385031215610f2f57600080fd5b823567ffffffffffffffff811115610f4657600080fd5b610f5285828601610eda565b90969095509350505050565b60005b83811015610f79578181015183820152602001610f61565b50506000910152565b60008151808452610f9a816020860160208601610f5e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b848110156110ac577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08684030189528151805173ffffffffffffffffffffffffffffffffffffffff908116855285820151811686860152604080830151821690860152606080830151909116908501526080808201519085015260a08082015160e0828701819052919061107f83880182610f82565b9250505060c08083015192506110988187018415159052565b509985019993505090830190600101610fe9565b5090979650505050505050565b6020815260006101db6020830184610fcc565b60006101408251845260208301518160208601526110ec82860182610f82565b915050604083015184820360408601526111068282610f82565b9150506060830151611130606086018273ffffffffffffffffffffffffffffffffffffffff169052565b506080830151611158608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a083015161118060a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e0850152610100808401516111a98287018215159052565b50506101209283015115159390920192909252919050565b6040815260006111d460408301856110cc565b82810360208401526111e68185610fcc565b95945050505050565b6020815260006101db60208301846110cc565b73ffffffffffffffffffffffffffffffffffffffff8116811461122457600080fd5b50565b803561123281611202565b919050565b8035801515811461123257600080fd5b6000806000806000806000806000806101008b8d03121561126757600080fd5b8a3567ffffffffffffffff8082111561127f57600080fd5b61128b8e838f01610eda565b909c509a5060208d01359150808211156112a457600080fd5b506112b18d828e01610eda565b90995097505060408b01356112c581611202565b955060608b01356112d581611202565b945060808b0135935060a08b013592506112f160c08c01611237565b91506112ff60e08c01611237565b90509295989b9194979a5092959850565b60e08152600061132360e083018a610f82565b73ffffffffffffffffffffffffffffffffffffffff988916602084015296909716604082015260608101949094526080840192909252151560a0830152151560c09091015292915050565b6000806000806000806060878903121561138757600080fd5b863567ffffffffffffffff8082111561139f57600080fd5b6113ab8a838b01610eda565b909850965060208901359150808211156113c457600080fd5b6113d08a838b01610eda565b909650945060408901359150808211156113e957600080fd5b506113f689828a01610eda565b979a9699509497509295939492505050565b6000808585111561141857600080fd5b8386111561142557600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156114725780818660040360031b1b83161692505b505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff811182821017156114cc576114cc61147a565b60405290565b604051610140810167ffffffffffffffff811182821017156114cc576114cc61147a565b6040516080810167ffffffffffffffff811182821017156114cc576114cc61147a565b60405160c0810167ffffffffffffffff811182821017156114cc576114cc61147a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156115835761158361147a565b604052919050565b600082601f83011261159c57600080fd5b813567ffffffffffffffff8111156115b6576115b661147a565b6115e760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161153c565b8181528460208386010111156115fc57600080fd5b816020850160208301376000918101602001919091529392505050565b600060e0828403121561162b57600080fd5b6116336114a9565b905061163e82611227565b815261164c60208301611227565b602082015261165d60408301611227565b604082015261166e60608301611227565b60608201526080820135608082015260a082013567ffffffffffffffff81111561169757600080fd5b6116a38482850161158b565b60a0830152506116b560c08301611237565b60c082015292915050565b60008060008060008060c087890312156116d957600080fd5b86359550602087013567ffffffffffffffff808211156116f857600080fd5b6117048a838b0161158b565b9650604089013591508082111561171a57600080fd5b6117268a838b0161158b565b95506060890135915061173882611202565b9093506080880135925060a0880135908082111561175557600080fd5b5061176289828a01611619565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082601f8301126117af57600080fd5b8135602067ffffffffffffffff808311156117cc576117cc61147a565b8260051b6117db83820161153c565b93845285810183019383810190888611156117f557600080fd5b84880192505b85831015611831578235848111156118135760008081fd5b6118218a87838c0101611619565b83525091840191908401906117fb565b98975050505050505050565b60008060008060008060c0878903121561185657600080fd5b86359550602087013567ffffffffffffffff8082111561187557600080fd5b6118818a838b0161158b565b9650604089013591508082111561189757600080fd5b6118a38a838b0161158b565b9550606089013591506118b582611202565b9093506080880135925060a088013590808211156118d257600080fd5b5061176289828a0161179e565b81810381811115610ed4577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8183823760009101908152919050565b6000825161193b818460208701610f5e565b9190910192915050565b6000610140828403121561195857600080fd5b6119606114d2565b905081358152602082013567ffffffffffffffff8082111561198157600080fd5b61198d8583860161158b565b602084015260408401359150808211156119a657600080fd5b506119b38482850161158b565b6040830152506119c560608301611227565b60608201526119d660808301611227565b60808201526119e760a08301611227565b60a082015260c082013560c082015260e082013560e0820152610100611a0e818401611237565b90820152610120611a20838201611237565b9082015292915050565b803563ffffffff8116811461123257600080fd5b600060408284031215611a5057600080fd5b6040516040810181811067ffffffffffffffff82111715611a7357611a7361147a565b604052823581526020928301359281019290925250919050565b600060a08284031215611a9f57600080fd5b611aa76114f6565b9050813561ffff81168114611abb57600080fd5b8152602082013567ffffffffffffffff80821115611ad857600080fd5b9083019060e08286031215611aec57600080fd5b611af46114a9565b611afd83611a2a565b8152602083013560208201526040830135604082015260608301356060820152608083013582811115611b2f57600080fd5b611b3b8782860161158b565b60808301525060a083013582811115611b5357600080fd5b611b5f8782860161158b565b60a08301525060c083013582811115611b7757600080fd5b611b838782860161158b565b60c083015250602084015250611b9e90508360408401611a3e565b6040820152611baf60808301611227565b606082015292915050565b60008060408385031215611bcd57600080fd5b823567ffffffffffffffff80821115611be557600080fd5b611bf186838701611945565b93506020850135915080821115611c0757600080fd5b50611c1485828601611a8d565b9150509250929050565b600080600060608486031215611c3357600080fd5b833567ffffffffffffffff80821115611c4b57600080fd5b611c5787838801611945565b94506020860135915080821115611c6d57600080fd5b611c798783880161179e565b93506040860135915080821115611c8f57600080fd5b50611c9c86828701611a8d565b9150509250925092565b803567ffffffffffffffff8116811461123257600080fd5b80356007811061123257600080fd5b600060c08284031215611cdf57600080fd5b611ce7611519565b9050611cf282611a2a565b8152611d0060208301611ca6565b6020820152604082013567ffffffffffffffff80821115611d2057600080fd5b611d2c8583860161158b565b60408401526060840135915080821115611d4557600080fd5b50611d528482850161158b565b60608301525060808201356080820152611d6e60a08301611cbe565b60a082015292915050565b60008060408385031215611d8c57600080fd5b823567ffffffffffffffff80821115611da457600080fd5b611db086838701611945565b93506020850135915080821115611dc657600080fd5b50611c1485828601611ccd565b600080600060608486031215611de857600080fd5b833567ffffffffffffffff80821115611e0057600080fd5b611e0c87838801611945565b94506020860135915080821115611e2257600080fd5b611e2e8783880161179e565b93506040860135915080821115611e4457600080fd5b50611c9c86828701611ccd565b60006101408284031215611e6457600080fd5b611e6c6114d2565b9050611e7782611227565b8152611e8560208301611227565b6020820152611e9660408301611227565b604082015260608201356060820152611eb160808301611ca6565b6080820152611ec260a08301611227565b60a0820152611ed360c08301611a2a565b60c0820152611ee460e08301611a2a565b60e0820152610100611ef7818401611a2a565b908201526101208281013567ffffffffffffffff811115611f1757600080fd5b611f238582860161158b565b82840152505092915050565b60008060408385031215611f4257600080fd5b823567ffffffffffffffff80821115611f5a57600080fd5b611f6686838701611945565b93506020850135915080821115611f7c57600080fd5b50611c1485828601611e51565b600080600060608486031215611f9e57600080fd5b833567ffffffffffffffff80821115611fb657600080fd5b611fc287838801611945565b94506020860135915080821115611fd857600080fd5b611fe48783880161179e565b93506040860135915080821115611ffa57600080fd5b50611c9c86828701611e51565b6000806040838503121561201a57600080fd5b823567ffffffffffffffff8082111561203257600080fd5b61203e86838701611945565b9350602085013591508082111561205457600080fd5b50611c148582860161179e565b60006020828403121561207357600080fd5b813567ffffffffffffffff81111561208a57600080fd5b610da68482850161194556fea2646970667358221220e86eeb06f007c444e055d0be37fbe643858b46b5b407cc696a83d70c4e49724964736f6c63430008110033";
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
