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
    static readonly bytecode = "0x608060405234801561001057600080fd5b506127f4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063d53482cf1161005b578063d53482cf14610152578063df1c3a5b14610175578063ee0aa32014610196578063f58ae2ce146101bc57600080fd5b8063070e81f11461008d578063103c5200146100b65780637f99d7af146100d7578063c318eeda146100f7575b600080fd5b6100a061009b366004611240565b6101cf565b6040516100ad91906113dd565b60405180910390f35b6100c96100c4366004611240565b6101e2565b6040516100ad9291906114e5565b6100ea6100e5366004611240565b61025d565b6040516100ad9190611513565b61010a610105366004611240565b6102b9565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681526020810195909552928516928401929092529092166060820152608081019190915260a0016100ad565b610165610160366004611574565b610431565b60405190151581526020016100ad565b610188610183366004611240565b6106c2565b6040519081526020016100ad565b6101a96101a4366004611240565b6107bb565b6040516100ad9796959493929190611643565b6101656101ca3660046116a1565b610876565b60606101db8383610efc565b9392505050565b604080516101408101825260008082526060602083018190529282018390528282018190526080820181905260a0820181905260c0820181905260e0820181905261010082018190526101208201529061023c8484610fce565b915081610100015115610256576102538484610efc565b90505b9250929050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526101db8383610fce565b60008060008060006060600088888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394507fd6a4bc50000000000000000000000000000000000000000000000000000000009361032e93506004925090508b8d61173b565b61033791611765565b7fffffffff00000000000000000000000000000000000000000000000000000000160361037b5761036b886004818c61173b565b810190610378919061197d565b90505b610395600480835161038d91906119e9565b8391906110e4565b8060200190518101906103a89190611bc2565b8051929a50909750955085935060009250151590506103c9576103c9611c70565b6020026020010151604001519650816000815181106103ea576103ea611c70565b6020026020010151608001519550816001835161040791906119e9565b8151811061041757610417611c70565b602002602001015160600151935050509295509295909350565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810182905261048c8c8c6107bb565b1515610120880152151561010087015260e086015260c085015273ffffffffffffffffffffffffffffffffffffffff90811660a0850152166080830152602080830191909152604080516000815291820180825282519020916104f3918d918d9101611c9f565b60405160208183030381529060405280519060200120148061056657508989604051602001610523929190611c9f565b60405160208183030381529060405280519060200120816020015160405160200161054e9190611caf565b60405160208183030381529060405280519060200120145b80156105c0575073ffffffffffffffffffffffffffffffffffffffff80891614806105c057508773ffffffffffffffffffffffffffffffffffffffff16816080015173ffffffffffffffffffffffffffffffffffffffff16145b801561061a575073ffffffffffffffffffffffffffffffffffffffff808816148061061a57508673ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff16145b801561065257507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8614806106525750858160c00151145b801561068a57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff85148061068a5750848160e00151145b801561069e57508315158161010001511515145b80156106b257508215158161012001511515145b9c9b505050505050505050505050565b60008083838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525093945061070a9250879150869050610fce565b90507fd6a4bc500000000000000000000000000000000000000000000000000000000061073b60046000878961173b565b61074491611765565b7fffffffff00000000000000000000000000000000000000000000000000000000160361078857610778846004818861173b565b810190610785919061197d565b91505b806101000151156107a557606482015182016024015192506107b3565b604482015182016024015192505b505092915050565b606060008060008060008060006107d28a8a610fce565b9050806101000151156108355760006107eb8b8b610efc565b90508060008151811061080057610800611c70565b60200260200101516040015197508060008151811061082157610821611c70565b602002602001015160800151955050610844565b806080015196508060c0015194505b602081015160a082015160e083015161010084015161012090940151929d999c50909a50959850949690955092505050565b60008087878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394507fd6a4bc5000000000000000000000000000000000000000000000000000000000936108e293506004925090508a8c61173b565b6108eb91611765565b7fffffffff00000000000000000000000000000000000000000000000000000000160361092f5761091f876004818b61173b565b81019061092c919061197d565b90505b6000818060200190518101906109459190611ccb565b90507f72366cd3000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610a375760006109ac60048085516109a491906119e9565b8591906110e4565b8060200190518101906109bf9190611ea6565b91505080600001518051906020012086866040516109de929190611c9f565b6040518091039020148015610a2d5750602081015173ffffffffffffffffffffffffffffffffffffffff16610a15888a018a611f0a565b73ffffffffffffffffffffffffffffffffffffffff16145b9350505050610ef2565b7f7c0ce6e9000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610ac7576000610a9460048085516109a491906119e9565b806020019051810190610aa79190611f27565b9250505080600001518051906020012086866040516109de929190611c9f565b7f41e15319000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610b95576000610b2460048085516109a491906119e9565b806020019051810190610b379190612062565b9150508060e00151805190602001208686604051610b56929190611c9f565b6040518091039020148015610a2d57508060c00151805190602001208888604051610b82929190611c9f565b6040518091039020149350505050610ef2565b7f12e879e7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610c25576000610bf260048085516109a491906119e9565b806020019051810190610c0591906120bc565b925050508060e00151805190602001208686604051610b56929190611c9f565b7ffaf6a213000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610ce0576000610c8260048085516109a491906119e9565b806020019051810190610c95919061220d565b9150508060600151805190602001208686604051610cb4929190611c9f565b6040518091039020148015610a2d57508060400151805190602001208888604051610b82929190611c9f565b7f4f93ad26000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610d70576000610d3d60048085516109a491906119e9565b806020019051810190610d509190612267565b925050508060600151805190602001208686604051610cb4929190611c9f565b7fcea158f1000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610e5a576000610dcd60048085516109a491906119e9565b806020019051810190610de091906123b1565b915050806101000151805190602001208686604051610e00929190611c9f565b6040518091039020148015610a2d575080516040805173ffffffffffffffffffffffffffffffffffffffff909216602083015201604051602081830303815290604052805190602001208888604051610b82929190611c9f565b7fcb5c1b60000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610eeb576000610eb760048085516109a491906119e9565b806020019051810190610eca919061240b565b92505050806101000151805190602001208686604051610e00929190611c9f565b6000925050505b9695505050505050565b60607fd6a4bc5000000000000000000000000000000000000000000000000000000000610f2d60046000858761173b565b610f3691611765565b7fffffffff000000000000000000000000000000000000000000000000000000001603610faa576000610f6c836004818761173b565b810190610f79919061197d565b9050610f8d600480835161038d91906119e9565b806020019051810190610fa09190612489565b9250610fc8915050565b610fb7826004818661173b565b810190610fc491906125be565b9150505b92915050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091527fd6a4bc500000000000000000000000000000000000000000000000000000000061104f60046000858761173b565b61105891611765565b7fffffffff0000000000000000000000000000000000000000000000000000000016036110ca57600061108e836004818761173b565b81019061109b919061197d565b90506110af600480835161038d91906119e9565b8060200190518101906110c29190612741565b915050610fc8565b6110d7826004818661173b565b8101906101db9190612776565b6060816110f281601f6127ab565b101561112a576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61113482846127ab565b8451101561116e576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561118d57604051915060008252602082016040526111f5565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156111c65780518352602092830192016111ae565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60008083601f84011261121057600080fd5b50813567ffffffffffffffff81111561122857600080fd5b60208301915083602082850101111561025657600080fd5b6000806020838503121561125357600080fd5b823567ffffffffffffffff81111561126a57600080fd5b611276858286016111fe565b90969095509350505050565b60005b8381101561129d578181015183820152602001611285565b50506000910152565b600081518084526112be816020860160208601611282565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b848110156113d0577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08684030189528151805173ffffffffffffffffffffffffffffffffffffffff908116855285820151811686860152604080830151821690860152606080830151909116908501526080808201519085015260a08082015160e082870181905291906113a3838801826112a6565b9250505060c08083015192506113bc8187018415159052565b50998501999350509083019060010161130d565b5090979650505050505050565b6020815260006101db60208301846112f0565b6000610140825184526020830151816020860152611410828601826112a6565b9150506040830151848203604086015261142a82826112a6565b9150506060830151611454606086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608083015161147c608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a08301516114a460a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e0850152610100808401516114cd8287018215159052565b50506101209283015115159390920192909252919050565b6040815260006114f860408301856113f0565b828103602084015261150a81856112f0565b95945050505050565b6020815260006101db60208301846113f0565b73ffffffffffffffffffffffffffffffffffffffff8116811461154857600080fd5b50565b803561155681611526565b919050565b801515811461154857600080fd5b80356115568161155b565b6000806000806000806000806000806101008b8d03121561159457600080fd5b8a3567ffffffffffffffff808211156115ac57600080fd5b6115b88e838f016111fe565b909c509a5060208d01359150808211156115d157600080fd5b506115de8d828e016111fe565b90995097505060408b01356115f281611526565b955060608b013561160281611526565b945060808b0135935060a08b0135925060c08b01356116208161155b565b915060e08b01356116308161155b565b809150509295989b9194979a5092959850565b60e08152600061165660e083018a6112a6565b73ffffffffffffffffffffffffffffffffffffffff988916602084015296909716604082015260608101949094526080840192909252151560a0830152151560c09091015292915050565b600080600080600080606087890312156116ba57600080fd5b863567ffffffffffffffff808211156116d257600080fd5b6116de8a838b016111fe565b909850965060208901359150808211156116f757600080fd5b6117038a838b016111fe565b9096509450604089013591508082111561171c57600080fd5b5061172989828a016111fe565b979a9699509497509295939492505050565b6000808585111561174b57600080fd5b8386111561175857600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156107b35760049490940360031b84901b1690921692915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff811182821017156117fd576117fd6117ab565b60405290565b604051610140810167ffffffffffffffff811182821017156117fd576117fd6117ab565b604051610100810167ffffffffffffffff811182821017156117fd576117fd6117ab565b60405160c0810167ffffffffffffffff811182821017156117fd576117fd6117ab565b604051610120810167ffffffffffffffff811182821017156117fd576117fd6117ab565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156118d9576118d96117ab565b604052919050565b600067ffffffffffffffff8211156118fb576118fb6117ab565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261193857600080fd5b813561194b611946826118e1565b611892565b81815284602083860101111561196057600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561198f57600080fd5b813567ffffffffffffffff8111156119a657600080fd5b6119b284828501611927565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610fc857610fc86119ba565b600082601f830112611a0d57600080fd5b8151611a1b611946826118e1565b818152846020838601011115611a3057600080fd5b6119b2826020830160208701611282565b805161155681611526565b600067ffffffffffffffff821115611a6657611a666117ab565b5060051b60200190565b80516115568161155b565b600082601f830112611a8c57600080fd5b81516020611a9c61194683611a4c565b82815260059290921b84018101918181019086841115611abb57600080fd5b8286015b84811015611bb757805167ffffffffffffffff80821115611ae05760008081fd5b818901915060e0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848d03011215611b195760008081fd5b611b216117da565b611b2c888501611a41565b81526040611b3b818601611a41565b898301526060611b4c818701611a41565b8284015260809150611b5f828701611a41565b818401525060a0808601518284015260c091508186015185811115611b845760008081fd5b611b928f8c838a01016119fc565b828501525050611ba3838601611a70565b908201528652505050918301918301611abf565b509695505050505050565b60008060008060008060c08789031215611bdb57600080fd5b86519550602087015167ffffffffffffffff80821115611bfa57600080fd5b611c068a838b016119fc565b96506040890151915080821115611c1c57600080fd5b611c288a838b016119fc565b955060608901519150611c3a82611526565b608089015160a08a0151929550935080821115611c5657600080fd5b50611c6389828a01611a7b565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8183823760009101908152919050565b60008251611cc1818460208701611282565b9190910192915050565b600060208284031215611cdd57600080fd5b81517fffffffff00000000000000000000000000000000000000000000000000000000811681146101db57600080fd5b60006101408284031215611d2057600080fd5b611d28611803565b905081518152602082015167ffffffffffffffff80821115611d4957600080fd5b611d55858386016119fc565b60208401526040840151915080821115611d6e57600080fd5b50611d7b848285016119fc565b604083015250611d8d60608301611a41565b6060820152611d9e60808301611a41565b6080820152611daf60a08301611a41565b60a082015260c082015160c082015260e082015160e0820152610100611dd6818401611a70565b90820152610120611de8838201611a70565b9082015292915050565b805163ffffffff8116811461155657600080fd5b600060e08284031215611e1857600080fd5b611e206117da565b9050815167ffffffffffffffff811115611e3957600080fd5b611e45848285016119fc565b825250611e5460208301611a41565b60208201526040820151604082015260608201516060820152611e7960808301611a41565b6080820152611e8a60a08301611df2565b60a0820152611e9b60c08301611a70565b60c082015292915050565b60008060408385031215611eb957600080fd5b825167ffffffffffffffff80821115611ed157600080fd5b611edd86838701611d0d565b93506020850151915080821115611ef357600080fd5b50611f0085828601611e06565b9150509250929050565b600060208284031215611f1c57600080fd5b81356101db81611526565b600080600060608486031215611f3c57600080fd5b835167ffffffffffffffff80821115611f5457600080fd5b611f6087838801611d0d565b94506020860151915080821115611f7657600080fd5b611f8287838801611a7b565b93506040860151915080821115611f9857600080fd5b50611fa586828701611e06565b9150509250925092565b60006101008284031215611fc257600080fd5b611fca611827565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015261200460a08301611a41565b60a082015260c082015167ffffffffffffffff8082111561202457600080fd5b612030858386016119fc565b60c084015260e084015191508082111561204957600080fd5b50612056848285016119fc565b60e08301525092915050565b6000806040838503121561207557600080fd5b825167ffffffffffffffff8082111561208d57600080fd5b61209986838701611d0d565b935060208501519150808211156120af57600080fd5b50611f0085828601611faf565b6000806000606084860312156120d157600080fd5b835167ffffffffffffffff808211156120e957600080fd5b6120f587838801611d0d565b9450602086015191508082111561210b57600080fd5b61211787838801611a7b565b9350604086015191508082111561212d57600080fd5b50611fa586828701611faf565b805167ffffffffffffffff8116811461155657600080fd5b80516007811061155657600080fd5b600060c0828403121561217357600080fd5b61217b61184b565b905061218682611df2565b81526121946020830161213a565b6020820152604082015167ffffffffffffffff808211156121b457600080fd5b6121c0858386016119fc565b604084015260608401519150808211156121d957600080fd5b506121e6848285016119fc565b6060830152506080820151608082015261220260a08301612152565b60a082015292915050565b6000806040838503121561222057600080fd5b825167ffffffffffffffff8082111561223857600080fd5b61224486838701611d0d565b9350602085015191508082111561225a57600080fd5b50611f0085828601612161565b60008060006060848603121561227c57600080fd5b835167ffffffffffffffff8082111561229457600080fd5b6122a087838801611d0d565b945060208601519150808211156122b657600080fd5b6122c287838801611a7b565b935060408601519150808211156122d857600080fd5b50611fa586828701612161565b600061012082840312156122f857600080fd5b61230061186e565b905061230b82611a41565b815261231960208301611a41565b602082015261232a60408301611a41565b60408201526060820151606082015261234560808301611a41565b608082015261235660a08301611df2565b60a082015261236760c08301611df2565b60c082015261237860e08301611df2565b60e08201526101008083015167ffffffffffffffff81111561239957600080fd5b6123a5858286016119fc565b82840152505092915050565b600080604083850312156123c457600080fd5b825167ffffffffffffffff808211156123dc57600080fd5b6123e886838701611d0d565b935060208501519150808211156123fe57600080fd5b50611f00858286016122e5565b60008060006060848603121561242057600080fd5b835167ffffffffffffffff8082111561243857600080fd5b61244487838801611d0d565b9450602086015191508082111561245a57600080fd5b61246687838801611a7b565b9350604086015191508082111561247c57600080fd5b50611fa5868287016122e5565b6000806040838503121561249c57600080fd5b825167ffffffffffffffff808211156124b457600080fd5b6124c086838701611d0d565b935060208501519150808211156124d657600080fd5b50611f0085828601611a7b565b600061014082840312156124f657600080fd5b6124fe611803565b905081358152602082013567ffffffffffffffff8082111561251f57600080fd5b61252b85838601611927565b6020840152604084013591508082111561254457600080fd5b5061255184828501611927565b6040830152506125636060830161154b565b60608201526125746080830161154b565b608082015261258560a0830161154b565b60a082015260c082013560c082015260e082013560e08201526101006125ac818401611569565b90820152610120611de8838201611569565b600080604083850312156125d157600080fd5b823567ffffffffffffffff808211156125e957600080fd5b6125f5868387016124e3565b935060209150818501358181111561260c57600080fd5b8501601f8101871361261d57600080fd5b803561262b61194682611a4c565b81815260059190911b8201840190848101908983111561264a57600080fd5b8584015b838110156127305780358681111561266557600080fd5b850160e0818d037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001121561269957600080fd5b6126a16117da565b6126ac89830161154b565b81526126ba6040830161154b565b898201526126ca6060830161154b565b60408201526126db6080830161154b565b606082015260a0820135608082015260c080830135898111156126fe5760008081fd5b61270c8f8c83870101611927565b60a08401525061271e60e08401611569565b9082015284525091860191860161264e565b508096505050505050509250929050565b60006020828403121561275357600080fd5b815167ffffffffffffffff81111561276a57600080fd5b6119b284828501611d0d565b60006020828403121561278857600080fd5b813567ffffffffffffffff81111561279f57600080fd5b6119b2848285016124e3565b80820180821115610fc857610fc86119ba56fea2646970667358221220c837a3445269e81e53c57c0782c8e568afe8bd2ef8fa5d5fd113ba40d053e45764736f6c63430008110033";
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
