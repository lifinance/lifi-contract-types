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
    static readonly bytecode = "0x608060405234801561000f575f80fd5b506120238061001d5f395ff3fe608060405234801561000f575f80fd5b5060043610610085575f3560e01c8063d53482cf11610058578063d53482cf1461014e578063df1c3a5b14610171578063ee0aa32014610192578063f58ae2ce146101b8575f80fd5b8063070e81f114610089578063103c5200146100b25780637f99d7af146100d3578063c318eeda146100f3575b5f80fd5b61009c610097366004610ef3565b6101cb565b6040516100a99190611088565b60405180910390f35b6100c56100c0366004610ef3565b6101de565b6040516100a992919061118e565b6100e66100e1366004610ef3565b610258565b6040516100a991906111bb565b610106610101366004610ef3565b6102b3565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681526020810195909552928516928401929092529092166060820152608081019190915260a0016100a9565b61016161015c366004611210565b610553565b60405190151581526020016100a9565b61018461017f366004610ef3565b61074f565b6040519081526020016100a9565b6101a56101a0366004610ef3565b6107c7565b6040516100a997969594939291906112d1565b6101616101c636600461132e565b61087b565b60606101d78383610d67565b9392505050565b60408051610140810182525f8082526060602083018190529282018390528282018190526080820181905260a0820181905260c0820181905260e082018190526101008201819052610120820152906102378484610d8b565b9150816101000151156102515761024e8484610d67565b90505b9250929050565b60408051610140810182525f8082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526101d78383610d8b565b5f808080806101e486116102f3576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60605f6103036004828a8c6113c1565b61030c916113e8565b90507fffffffff0000000000000000000000000000000000000000000000000000000081167f4666fc8000000000000000000000000000000000000000000000000000000000148061039f57507fffffffff0000000000000000000000000000000000000000000000000000000081167f733214a300000000000000000000000000000000000000000000000000000000145b806103eb57507fffffffff0000000000000000000000000000000000000000000000000000000081167faf7060fd00000000000000000000000000000000000000000000000000000000145b156104b55760408051600180825281830190925290816020015b6040805160e0810182525f808252602080830182905292820181905260608083018290526080830182905260a083015260c082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff909201910181610405579050509150610479886004818c6113c1565b810190610486919061166d565b8751929550909350915085905f906104a0576104a0611715565b602090810291909101015290955092506104da565b6104c2886004818c6113c1565b8101906104cf91906117dc565b919950965094505050505b815f815181106104ec576104ec611715565b6020026020010151604001519650815f8151811061050c5761050c611715565b602002602001015160800151955081600183516105299190611877565b8151811061053957610539611715565b602002602001015160600151935050509295509295909350565b5f8061055f8c8c610d8b565b90505f8a8a6040516020016105759291906118af565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201205f845290830191829052915190209091508114806105f257508082602001516040516020016105da91906118be565b60405160208183030381529060405280519060200120145b801561064c575073ffffffffffffffffffffffffffffffffffffffff808a16148061064c57508873ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16145b80156106a6575073ffffffffffffffffffffffffffffffffffffffff80891614806106a657508773ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16145b80156106de57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8714806106de5750868260c00151145b801561071657507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8614806107165750858260e00151145b801561072a57508415158261010001511515145b801561073e57508315158261012001511515145b9d9c50505050505050505050505050565b5f8083838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152509293506107969250869150859050610d8b565b6101000151156107b257606481015181016024015191506107c0565b604481015181016024015191505b5092915050565b60605f805f805f805f6107da8a8a610d8b565b90508061010001511561083a575f6107f28b8b610d67565b9050805f8151811061080657610806611715565b6020026020010151604001519750805f8151811061082657610826611715565b602002602001015160800151955050610849565b806080015196508060c0015194505b602081015160a082015160e083015161010084015161012090940151929d999c50909a50959850949690955092505050565b5f8061088a600482898b6113c1565b610893916113e8565b90507feb2acf89000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000082160161097a575f6108ec886004818c6113c1565b8101906108f99190611b3f565b915050806020015160a0015180519060200120858560405161091c9291906118af565b6040518091039020148015610971575061097187878080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050506020838101510151610df6565b92505050610d5d565b7f59fef59a000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610a02575f6109d1886004818c6113c1565b8101906109de9190611b9f565b92505050806020015160a0015180519060200120858560405161091c9291906118af565b7ffaf6a213000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610ac3575f610a59886004818c6113c1565b810190610a669190611cee565b9150508060600151805190602001208585604051610a859291906118af565b604051809103902014801561097157508060400151805190602001208787604051610ab19291906118af565b60405180910390201492505050610d5d565b7f4f93ad26000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610b47575f610b1a886004818c6113c1565b810190610b279190611d44565b925050508060600151805190602001208585604051610a859291906118af565b7fd733bcea000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610c25575f610b9e886004818c6113c1565b810190610bab9190611e97565b915050806101200151805190602001208585604051610bcb9291906118af565b6040518091039020148015610971575080516040805173ffffffffffffffffffffffffffffffffffffffff909216602083015201604051602081830303815290604052805190602001208787604051610ab19291906118af565b7fd77cd343000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610caa575f610c7c886004818c6113c1565b810190610c899190611eed565b92505050806101200151805190602001208585604051610bcb9291906118af565b7fd733bcea000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610d01575f610b9e886004818c6113c1565b7fd77cd343000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610d58575f610c7c886004818c6113c1565b5f9150505b9695505050505050565b6060610d7682600481866113c1565b810190610d839190611f65565b949350505050565b60408051610140810182525f8082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152610de982600481866113c1565b8101906101d79190611fbb565b5f601483511015610e8d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f496e76616c69642063616c6c546f206c656e6774683b2065787065637465642060448201527f6174206c65617374203230206279746573000000000000000000000000000000606482015260840160405180910390fd5b50602082015173ffffffffffffffffffffffffffffffffffffffff8281169116145b92915050565b5f8083601f840112610ec5575f80fd5b50813567ffffffffffffffff811115610edc575f80fd5b602083019150836020828501011115610251575f80fd5b5f8060208385031215610f04575f80fd5b823567ffffffffffffffff811115610f1a575f80fd5b610f2685828601610eb5565b90969095509350505050565b5f5b83811015610f4c578181015183820152602001610f34565b50505f910152565b5f8151808452610f6b816020860160208601610f32565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b5f82825180855260208086019550808260051b8401018186015f5b8481101561107b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08684030189528151805173ffffffffffffffffffffffffffffffffffffffff908116855285820151811686860152604080830151821690860152606080830151909116908501526080808201519085015260a08082015160e0828701819052919061104e83880182610f54565b9250505060c08083015192506110678187018415159052565b509985019993505090830190600101610fb8565b5090979650505050505050565b602081525f6101d76020830184610f9d565b5f6101408251845260208301518160208601526110b982860182610f54565b915050604083015184820360408601526110d38282610f54565b91505060608301516110fd606086018273ffffffffffffffffffffffffffffffffffffffff169052565b506080830151611125608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a083015161114d60a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e0850152610100808401516111768287018215159052565b50506101209283015115159390920192909252919050565b604081525f6111a0604083018561109a565b82810360208401526111b28185610f9d565b95945050505050565b602081525f6101d7602083018461109a565b73ffffffffffffffffffffffffffffffffffffffff811681146111ee575f80fd5b50565b80356111fc816111cd565b919050565b803580151581146111fc575f80fd5b5f805f805f805f805f806101008b8d03121561122a575f80fd5b8a3567ffffffffffffffff80821115611241575f80fd5b61124d8e838f01610eb5565b909c509a5060208d0135915080821115611265575f80fd5b506112728d828e01610eb5565b90995097505060408b0135611286816111cd565b955060608b0135611296816111cd565b945060808b0135935060a08b013592506112b260c08c01611201565b91506112c060e08c01611201565b90509295989b9194979a5092959850565b60e081525f6112e360e083018a610f54565b73ffffffffffffffffffffffffffffffffffffffff988916602084015296909716604082015260608101949094526080840192909252151560a0830152151560c09091015292915050565b5f805f805f8060608789031215611343575f80fd5b863567ffffffffffffffff8082111561135a575f80fd5b6113668a838b01610eb5565b9098509650602089013591508082111561137e575f80fd5b61138a8a838b01610eb5565b909650945060408901359150808211156113a2575f80fd5b506113af89828a01610eb5565b979a9699509497509295939492505050565b5f80858511156113cf575f80fd5b838611156113db575f80fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156114285780818660040360031b1b83161692505b505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b60405160e0810167ffffffffffffffff8111828210171561148057611480611430565b60405290565b604051610140810167ffffffffffffffff8111828210171561148057611480611430565b6040516080810167ffffffffffffffff8111828210171561148057611480611430565b60405160c0810167ffffffffffffffff8111828210171561148057611480611430565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561153757611537611430565b604052919050565b5f82601f83011261154e575f80fd5b813567ffffffffffffffff81111561156857611568611430565b61159960207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016114f0565b8181528460208386010111156115ad575f80fd5b816020850160208301375f918101602001919091529392505050565b5f60e082840312156115d9575f80fd5b6115e161145d565b90506115ec826111f1565b81526115fa602083016111f1565b602082015261160b604083016111f1565b604082015261161c606083016111f1565b60608201526080820135608082015260a082013567ffffffffffffffff811115611644575f80fd5b6116508482850161153f565b60a08301525061166260c08301611201565b60c082015292915050565b5f805f805f8060c08789031215611682575f80fd5b86359550602087013567ffffffffffffffff808211156116a0575f80fd5b6116ac8a838b0161153f565b965060408901359150808211156116c1575f80fd5b6116cd8a838b0161153f565b9550606089013591506116df826111cd565b9093506080880135925060a088013590808211156116fb575f80fd5b5061170889828a016115c9565b9150509295509295509295565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82601f830112611751575f80fd5b8135602067ffffffffffffffff8083111561176e5761176e611430565b8260051b61177d8382016114f0565b9384528581018301938381019088861115611796575f80fd5b84880192505b858310156117d0578235848111156117b2575f80fd5b6117c08a87838c01016115c9565b835250918401919084019061179c565b98975050505050505050565b5f805f805f8060c087890312156117f1575f80fd5b86359550602087013567ffffffffffffffff8082111561180f575f80fd5b61181b8a838b0161153f565b96506040890135915080821115611830575f80fd5b61183c8a838b0161153f565b95506060890135915061184e826111cd565b9093506080880135925060a0880135908082111561186a575f80fd5b5061170889828a01611742565b81810381811115610eaf577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818382375f9101908152919050565b5f82516118cf818460208701610f32565b9190910192915050565b5f61014082840312156118ea575f80fd5b6118f2611486565b905081358152602082013567ffffffffffffffff80821115611912575f80fd5b61191e8583860161153f565b60208401526040840135915080821115611936575f80fd5b506119438482850161153f565b604083015250611955606083016111f1565b6060820152611966608083016111f1565b608082015261197760a083016111f1565b60a082015260c082013560c082015260e082013560e082015261010061199e818401611201565b908201526101206119b0838201611201565b9082015292915050565b803563ffffffff811681146111fc575f80fd5b5f604082840312156119dd575f80fd5b6040516040810181811067ffffffffffffffff82111715611a0057611a00611430565b604052823581526020928301359281019290925250919050565b5f60a08284031215611a2a575f80fd5b611a326114aa565b9050813561ffff81168114611a45575f80fd5b8152602082013567ffffffffffffffff80821115611a61575f80fd5b9083019060e08286031215611a74575f80fd5b611a7c61145d565b611a85836119ba565b8152602083013560208201526040830135604082015260608301356060820152608083013582811115611ab6575f80fd5b611ac28782860161153f565b60808301525060a083013582811115611ad9575f80fd5b611ae58782860161153f565b60a08301525060c083013582811115611afc575f80fd5b611b088782860161153f565b60c083015250602084015250611b23905083604084016119cd565b6040820152611b34608083016111f1565b606082015292915050565b5f8060408385031215611b50575f80fd5b823567ffffffffffffffff80821115611b67575f80fd5b611b73868387016118d9565b93506020850135915080821115611b88575f80fd5b50611b9585828601611a1a565b9150509250929050565b5f805f60608486031215611bb1575f80fd5b833567ffffffffffffffff80821115611bc8575f80fd5b611bd4878388016118d9565b94506020860135915080821115611be9575f80fd5b611bf587838801611742565b93506040860135915080821115611c0a575f80fd5b50611c1786828701611a1a565b9150509250925092565b803567ffffffffffffffff811681146111fc575f80fd5b8035600781106111fc575f80fd5b5f60c08284031215611c56575f80fd5b611c5e6114cd565b9050611c69826119ba565b8152611c7760208301611c21565b6020820152604082013567ffffffffffffffff80821115611c96575f80fd5b611ca28583860161153f565b60408401526060840135915080821115611cba575f80fd5b50611cc78482850161153f565b60608301525060808201356080820152611ce360a08301611c38565b60a082015292915050565b5f8060408385031215611cff575f80fd5b823567ffffffffffffffff80821115611d16575f80fd5b611d22868387016118d9565b93506020850135915080821115611d37575f80fd5b50611b9585828601611c46565b5f805f60608486031215611d56575f80fd5b833567ffffffffffffffff80821115611d6d575f80fd5b611d79878388016118d9565b94506020860135915080821115611d8e575f80fd5b611d9a87838801611742565b93506040860135915080821115611daf575f80fd5b50611c1786828701611c46565b5f6101408284031215611dcd575f80fd5b611dd5611486565b9050611de0826111f1565b8152611dee602083016111f1565b6020820152611dff604083016111f1565b604082015260608201356060820152611e1a60808301611c21565b6080820152611e2b60a083016111f1565b60a0820152611e3c60c083016119ba565b60c0820152611e4d60e083016119ba565b60e0820152610100611e608184016119ba565b908201526101208281013567ffffffffffffffff811115611e7f575f80fd5b611e8b8582860161153f565b82840152505092915050565b5f8060408385031215611ea8575f80fd5b823567ffffffffffffffff80821115611ebf575f80fd5b611ecb868387016118d9565b93506020850135915080821115611ee0575f80fd5b50611b9585828601611dbc565b5f805f60608486031215611eff575f80fd5b833567ffffffffffffffff80821115611f16575f80fd5b611f22878388016118d9565b94506020860135915080821115611f37575f80fd5b611f4387838801611742565b93506040860135915080821115611f58575f80fd5b50611c1786828701611dbc565b5f8060408385031215611f76575f80fd5b823567ffffffffffffffff80821115611f8d575f80fd5b611f99868387016118d9565b93506020850135915080821115611fae575f80fd5b50611b9585828601611742565b5f60208284031215611fcb575f80fd5b813567ffffffffffffffff811115611fe1575f80fd5b610d83848285016118d956fea26469706673582212203376883dc9dd98d2e433d7cdb401aa799f5dddb35cffcf8b51b20a4f253f2cac64736f6c63430008160033";
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
