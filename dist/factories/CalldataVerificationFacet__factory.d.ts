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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061248d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063d53482cf1161005b578063d53482cf14610152578063df1c3a5b14610175578063ee0aa32014610196578063f58ae2ce146101bc57600080fd5b8063070e81f11461008d578063103c5200146100b65780637f99d7af146100d7578063c318eeda146100f7575b600080fd5b6100a061009b3660046110c2565b6101cf565b6040516100ad919061123e565b60405180910390f35b6100c96100c43660046110c2565b6101e2565b6040516100ad929190611346565b6100ea6100e53660046110c2565b61025d565b6040516100ad9190611374565b61010a6101053660046110c2565b6102b9565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681526020810195909552928516928401929092529092166060820152608081019190915260a0016100ad565b6101656101603660046113d5565b610431565b60405190151581526020016100ad565b6101886101833660046110c2565b6106c2565b6040519081526020016100ad565b6101a96101a43660046110c2565b6107bb565b6040516100ad97969594939291906114a4565b6101656101ca366004611502565b610876565b60606101db8383610d7e565b9392505050565b604080516101408101825260008082526060602083018190529282018390528282018190526080820181905260a0820181905260c0820181905260e0820181905261010082018190526101208201529061023c8484610e50565b915081610100015115610256576102538484610d7e565b90505b9250929050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526101db8383610e50565b60008060008060006060600088888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394507fd6a4bc50000000000000000000000000000000000000000000000000000000009361032e93506004925090508b8d61159c565b610337916115c6565b7fffffffff00000000000000000000000000000000000000000000000000000000160361037b5761036b886004818c61159c565b81019061037891906117ba565b90505b610395600480835161038d9190611826565b839190610f66565b8060200190518101906103a891906119ff565b8051929a50909750955085935060009250151590506103c9576103c9611aad565b6020026020010151604001519650816000815181106103ea576103ea611aad565b602002602001015160800151955081600183516104079190611826565b8151811061041757610417611aad565b602002602001015160600151935050509295509295909350565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261048c8c8c6107bb565b1515610120880152151561010087015260e086015260c085015273ffffffffffffffffffffffffffffffffffffffff90811660a0850152166080830152602080830191909152604080516000815291820180825282519020916104f3918d918d9101611adc565b60405160208183030381529060405280519060200120148061056657508989604051602001610523929190611adc565b60405160208183030381529060405280519060200120816020015160405160200161054e9190611aec565b60405160208183030381529060405280519060200120145b80156105c0575073ffffffffffffffffffffffffffffffffffffffff80891614806105c057508773ffffffffffffffffffffffffffffffffffffffff16816080015173ffffffffffffffffffffffffffffffffffffffff16145b801561061a575073ffffffffffffffffffffffffffffffffffffffff808816148061061a57508673ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff16145b801561065257507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8614806106525750858160c00151145b801561068a57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85148061068a5750848160e00151145b801561069e57508315158161010001511515145b80156106b257508215158161012001511515145b9c9b505050505050505050505050565b60008083838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093945061070a9250879150869050610e50565b90507fd6a4bc500000000000000000000000000000000000000000000000000000000061073b60046000878961159c565b610744916115c6565b7fffffffff00000000000000000000000000000000000000000000000000000000160361078857610778846004818861159c565b81019061078591906117ba565b91505b806101000151156107a557606482015182016024015192506107b3565b604482015182016024015192505b505092915050565b606060008060008060008060006107d28a8a610e50565b9050806101000151156108355760006107eb8b8b610d7e565b90508060008151811061080057610800611aad565b60200260200101516040015197508060008151811061082157610821611aad565b602002602001015160800151955050610844565b806080015196508060c0015194505b602081015160a082015160e083015161010084015161012090940151929d999c50909a50959850949690955092505050565b60008087878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394507fd6a4bc5000000000000000000000000000000000000000000000000000000000936108e293506004925090508a8c61159c565b6108eb916115c6565b7fffffffff00000000000000000000000000000000000000000000000000000000160361092f5761091f876004818b61159c565b81019061092c91906117ba565b90505b6000818060200190518101906109459190611b08565b90507fe308385a000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610a345760006109ac60048085516109a49190611826565b859190610f66565b8060200190518101906109bf9190611ce3565b91505080602001518051906020012086866040516109de929190611adc565b6040518091039020148015610a2a5750805173ffffffffffffffffffffffffffffffffffffffff16610a12888a018a611d47565b73ffffffffffffffffffffffffffffffffffffffff16145b9350505050610d74565b7f945e91d3000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610ac4576000610a9160048085516109a49190611826565b806020019051810190610aa49190611d64565b9250505080602001518051906020012086866040516109de929190611adc565b7f41e15319000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610b92576000610b2160048085516109a49190611826565b806020019051810190610b349190611e9f565b9150508060e00151805190602001208686604051610b53929190611adc565b6040518091039020148015610a2a57508060c00151805190602001208888604051610b7f929190611adc565b6040518091039020149350505050610d74565b7f12e879e7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610c22576000610bef60048085516109a49190611826565b806020019051810190610c029190611ef9565b925050508060e00151805190602001208686604051610b53929190611adc565b7ffaf6a213000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610cdd576000610c7f60048085516109a49190611826565b806020019051810190610c92919061204a565b9150508060600151805190602001208686604051610cb1929190611adc565b6040518091039020148015610a2a57508060400151805190602001208888604051610b7f929190611adc565b7f4f93ad26000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610d6d576000610d3a60048085516109a49190611826565b806020019051810190610d4d91906120a4565b925050508060600151805190602001208686604051610cb1929190611adc565b6000925050505b9695505050505050565b60607fd6a4bc5000000000000000000000000000000000000000000000000000000000610daf60046000858761159c565b610db8916115c6565b7fffffffff000000000000000000000000000000000000000000000000000000001603610e2c576000610dee836004818761159c565b810190610dfb91906117ba565b9050610e0f600480835161038d9190611826565b806020019051810190610e229190612122565b9250610e4a915050565b610e39826004818661159c565b810190610e469190612257565b9150505b92915050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091527fd6a4bc5000000000000000000000000000000000000000000000000000000000610ed160046000858761159c565b610eda916115c6565b7fffffffff000000000000000000000000000000000000000000000000000000001603610f4c576000610f10836004818761159c565b810190610f1d91906117ba565b9050610f31600480835161038d9190611826565b806020019051810190610f4491906123da565b915050610e4a565b610f59826004818661159c565b8101906101db919061240f565b606081610f7481601f612444565b1015610fac576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fb68284612444565b84511015610ff0576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561100f5760405191506000825260208201604052611077565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611048578051835260209283019201611030565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60008083601f84011261109257600080fd5b50813567ffffffffffffffff8111156110aa57600080fd5b60208301915083602082850101111561025657600080fd5b600080602083850312156110d557600080fd5b823567ffffffffffffffff8111156110ec57600080fd5b6110f885828601611080565b90969095509350505050565b60005b8381101561111f578181015183820152602001611107565b50506000910152565b60008151808452611140816020860160208601611104565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600081518084526020808501808196508360051b8101915082860160005b858110156112315782840389528151805173ffffffffffffffffffffffffffffffffffffffff908116865286820151811687870152604080830151821690870152606080830151909116908601526080808201519086015260a08082015160e0828801819052919061120483890182611128565b9250505060c080830151925061121d8188018415159052565b509986019994505090840190600101611190565b5091979650505050505050565b6020815260006101db6020830184611172565b600061014082518452602083015181602086015261127182860182611128565b9150506040830151848203604086015261128b8282611128565b91505060608301516112b5606086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060808301516112dd608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a083015161130560a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e08501526101008084015161132e8287018215159052565b50506101209283015115159390920192909252919050565b6040815260006113596040830185611251565b828103602084015261136b8185611172565b95945050505050565b6020815260006101db6020830184611251565b73ffffffffffffffffffffffffffffffffffffffff811681146113a957600080fd5b50565b80356113b781611387565b919050565b80151581146113a957600080fd5b80356113b7816113bc565b6000806000806000806000806000806101008b8d0312156113f557600080fd5b8a3567ffffffffffffffff8082111561140d57600080fd5b6114198e838f01611080565b909c509a5060208d013591508082111561143257600080fd5b5061143f8d828e01611080565b90995097505060408b013561145381611387565b955060608b013561146381611387565b945060808b0135935060a08b0135925060c08b0135611481816113bc565b915060e08b0135611491816113bc565b809150509295989b9194979a5092959850565b60e0815260006114b760e083018a611128565b73ffffffffffffffffffffffffffffffffffffffff988916602084015296909716604082015260608101949094526080840192909252151560a0830152151560c09091015292915050565b6000806000806000806060878903121561151b57600080fd5b863567ffffffffffffffff8082111561153357600080fd5b61153f8a838b01611080565b9098509650602089013591508082111561155857600080fd5b6115648a838b01611080565b9096509450604089013591508082111561157d57600080fd5b5061158a89828a01611080565b979a9699509497509295939492505050565b600080858511156115ac57600080fd5b838611156115b957600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156107b35760049490940360031b84901b1690921692915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561165e5761165e61160c565b60405290565b604051610140810167ffffffffffffffff8111828210171561165e5761165e61160c565b604051610100810167ffffffffffffffff8111828210171561165e5761165e61160c565b60405160c0810167ffffffffffffffff8111828210171561165e5761165e61160c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156117165761171661160c565b604052919050565b600067ffffffffffffffff8211156117385761173861160c565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261177557600080fd5b81356117886117838261171e565b6116cf565b81815284602083860101111561179d57600080fd5b816020850160208301376000918101602001919091529392505050565b6000602082840312156117cc57600080fd5b813567ffffffffffffffff8111156117e357600080fd5b6117ef84828501611764565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610e4a57610e4a6117f7565b600082601f83011261184a57600080fd5b81516118586117838261171e565b81815284602083860101111561186d57600080fd5b6117ef826020830160208701611104565b80516113b781611387565b600067ffffffffffffffff8211156118a3576118a361160c565b5060051b60200190565b80516113b7816113bc565b600082601f8301126118c957600080fd5b815160206118d961178383611889565b82815260059290921b840181019181810190868411156118f857600080fd5b8286015b848110156119f457805167ffffffffffffffff8082111561191d5760008081fd5b818901915060e0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848d030112156119565760008081fd5b61195e61163b565b61196988850161187e565b8152604061197881860161187e565b89830152606061198981870161187e565b828401526080915061199c82870161187e565b818401525060a0808601518284015260c0915081860151858111156119c15760008081fd5b6119cf8f8c838a0101611839565b8285015250506119e08386016118ad565b9082015286525050509183019183016118fc565b509695505050505050565b60008060008060008060c08789031215611a1857600080fd5b86519550602087015167ffffffffffffffff80821115611a3757600080fd5b611a438a838b01611839565b96506040890151915080821115611a5957600080fd5b611a658a838b01611839565b955060608901519150611a7782611387565b608089015160a08a0151929550935080821115611a9357600080fd5b50611aa089828a016118b8565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8183823760009101908152919050565b60008251611afe818460208701611104565b9190910192915050565b600060208284031215611b1a57600080fd5b81517fffffffff00000000000000000000000000000000000000000000000000000000811681146101db57600080fd5b60006101408284031215611b5d57600080fd5b611b65611664565b905081518152602082015167ffffffffffffffff80821115611b8657600080fd5b611b9285838601611839565b60208401526040840151915080821115611bab57600080fd5b50611bb884828501611839565b604083015250611bca6060830161187e565b6060820152611bdb6080830161187e565b6080820152611bec60a0830161187e565b60a082015260c082015160c082015260e082015160e0820152610100611c138184016118ad565b90820152610120611c258382016118ad565b9082015292915050565b805163ffffffff811681146113b757600080fd5b600060e08284031215611c5557600080fd5b611c5d61163b565b9050611c688261187e565b8152602082015167ffffffffffffffff811115611c8457600080fd5b611c9084828501611839565b6020830152506040820151604082015260608201516060820152611cb66080830161187e565b6080820152611cc760a08301611c2f565b60a0820152611cd860c083016118ad565b60c082015292915050565b60008060408385031215611cf657600080fd5b825167ffffffffffffffff80821115611d0e57600080fd5b611d1a86838701611b4a565b93506020850151915080821115611d3057600080fd5b50611d3d85828601611c43565b9150509250929050565b600060208284031215611d5957600080fd5b81356101db81611387565b600080600060608486031215611d7957600080fd5b835167ffffffffffffffff80821115611d9157600080fd5b611d9d87838801611b4a565b94506020860151915080821115611db357600080fd5b611dbf878388016118b8565b93506040860151915080821115611dd557600080fd5b50611de286828701611c43565b9150509250925092565b60006101008284031215611dff57600080fd5b611e07611688565b90508151815260208201516020820152604082015160408201526060820151606082015260808201516080820152611e4160a0830161187e565b60a082015260c082015167ffffffffffffffff80821115611e6157600080fd5b611e6d85838601611839565b60c084015260e0840151915080821115611e8657600080fd5b50611e9384828501611839565b60e08301525092915050565b60008060408385031215611eb257600080fd5b825167ffffffffffffffff80821115611eca57600080fd5b611ed686838701611b4a565b93506020850151915080821115611eec57600080fd5b50611d3d85828601611dec565b600080600060608486031215611f0e57600080fd5b835167ffffffffffffffff80821115611f2657600080fd5b611f3287838801611b4a565b94506020860151915080821115611f4857600080fd5b611f54878388016118b8565b93506040860151915080821115611f6a57600080fd5b50611de286828701611dec565b805167ffffffffffffffff811681146113b757600080fd5b8051600781106113b757600080fd5b600060c08284031215611fb057600080fd5b611fb86116ac565b9050611fc382611c2f565b8152611fd160208301611f77565b6020820152604082015167ffffffffffffffff80821115611ff157600080fd5b611ffd85838601611839565b6040840152606084015191508082111561201657600080fd5b5061202384828501611839565b6060830152506080820151608082015261203f60a08301611f8f565b60a082015292915050565b6000806040838503121561205d57600080fd5b825167ffffffffffffffff8082111561207557600080fd5b61208186838701611b4a565b9350602085015191508082111561209757600080fd5b50611d3d85828601611f9e565b6000806000606084860312156120b957600080fd5b835167ffffffffffffffff808211156120d157600080fd5b6120dd87838801611b4a565b945060208601519150808211156120f357600080fd5b6120ff878388016118b8565b9350604086015191508082111561211557600080fd5b50611de286828701611f9e565b6000806040838503121561213557600080fd5b825167ffffffffffffffff8082111561214d57600080fd5b61215986838701611b4a565b9350602085015191508082111561216f57600080fd5b50611d3d858286016118b8565b6000610140828403121561218f57600080fd5b612197611664565b905081358152602082013567ffffffffffffffff808211156121b857600080fd5b6121c485838601611764565b602084015260408401359150808211156121dd57600080fd5b506121ea84828501611764565b6040830152506121fc606083016113ac565b606082015261220d608083016113ac565b608082015261221e60a083016113ac565b60a082015260c082013560c082015260e082013560e08201526101006122458184016113ca565b90820152610120611c258382016113ca565b6000806040838503121561226a57600080fd5b823567ffffffffffffffff8082111561228257600080fd5b61228e8683870161217c565b93506020915081850135818111156122a557600080fd5b8501601f810187136122b657600080fd5b80356122c461178382611889565b81815260059190911b820184019084810190898311156122e357600080fd5b8584015b838110156123c9578035868111156122fe57600080fd5b850160e0818d037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001121561233257600080fd5b61233a61163b565b6123458983016113ac565b8152612353604083016113ac565b89820152612363606083016113ac565b6040820152612374608083016113ac565b606082015260a0820135608082015260c080830135898111156123975760008081fd5b6123a58f8c83870101611764565b60a0840152506123b760e084016113ca565b908201528452509186019186016122e7565b508096505050505050509250929050565b6000602082840312156123ec57600080fd5b815167ffffffffffffffff81111561240357600080fd5b6117ef84828501611b4a565b60006020828403121561242157600080fd5b813567ffffffffffffffff81111561243857600080fd5b6117ef8482850161217c565b80820180821115610e4a57610e4a6117f756fea26469706673582212208ae53d8426b27a961e0b7d4e08e80731a7dcd2a088d5705c10546143e57ed35d64736f6c63430008110033";
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
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): CalldataVerificationFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CalldataVerificationFacet;
}
export {};
