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
    static readonly bytecode = "0x608060405234801561001057600080fd5b506125de806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063c318eeda1161005b578063c318eeda146100ec578063d53482cf14610147578063ee0aa3201461016a578063f58ae2ce1461019057600080fd5b8063070e81f114610082578063103c5200146100ab5780637f99d7af146100cc575b600080fd5b6100956100903660046111f0565b6101a3565b6040516100a2919061138d565b60405180910390f35b6100be6100b93660046111f0565b6101b6565b6040516100a2929190611495565b6100df6100da3660046111f0565b610231565b6040516100a291906114c3565b6100ff6100fa3660046111f0565b61028d565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681526020810195909552928516928401929092529092166060820152608081019190915260a0016100a2565b61015a610155366004611524565b610468565b60405190151581526020016100a2565b61017d6101783660046111f0565b6106f9565b6040516100a297969594939291906115f3565b61015a61019e366004611651565b6107b4565b60606101af8383610d84565b9392505050565b604080516101408101825260008082526060602083018190529282018390528282018190526080820181905260a0820181905260c0820181905260e082018190526101008201819052610120820152906102108484610eb9565b91508161010001511561022a576102278484610d84565b90505b9250929050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526101af8383610eb9565b60008060008060006060600088888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394507fd6a4bc50000000000000000000000000000000000000000000000000000000009361030293506004925090508b8d6116eb565b61030b91611715565b7fffffffff0000000000000000000000000000000000000000000000000000000016148061039057507f0510f6bf00000000000000000000000000000000000000000000000000000000610363600460008b8d6116eb565b61036c91611715565b7fffffffff0000000000000000000000000000000000000000000000000000000016145b156103b2576103a2886004818c6116eb565b8101906103af919061190b565b90505b6103cc60048083516103c49190611977565b839190611094565b8060200190518101906103df9190611b50565b8051929a509097509550859350600092501515905061040057610400611bfe565b60200260200101516040015196508160008151811061042157610421611bfe565b6020026020010151608001519550816001835161043e9190611977565b8151811061044e5761044e611bfe565b602002602001015160600151935050509295509295909350565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526104c38c8c6106f9565b1515610120880152151561010087015260e086015260c085015273ffffffffffffffffffffffffffffffffffffffff90811660a08501521660808301526020808301919091526040805160008152918201808252825190209161052a918d918d9101611c2d565b60405160208183030381529060405280519060200120148061059d5750898960405160200161055a929190611c2d565b6040516020818303038152906040528051906020012081602001516040516020016105859190611c3d565b60405160208183030381529060405280519060200120145b80156105f7575073ffffffffffffffffffffffffffffffffffffffff80891614806105f757508773ffffffffffffffffffffffffffffffffffffffff16816080015173ffffffffffffffffffffffffffffffffffffffff16145b8015610651575073ffffffffffffffffffffffffffffffffffffffff808816148061065157508673ffffffffffffffffffffffffffffffffffffffff168160a0015173ffffffffffffffffffffffffffffffffffffffff16145b801561068957507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8614806106895750858160c00151145b80156106c157507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8514806106c15750848160e00151145b80156106d557508315158161010001511515145b80156106e957508215158161012001511515145b9c9b505050505050505050505050565b606060008060008060008060006107108a8a610eb9565b9050806101000151156107735760006107298b8b610d84565b90508060008151811061073e5761073e611bfe565b60200260200101516040015197508060008151811061075f5761075f611bfe565b602002602001015160800151955050610782565b806080015196508060c0015194505b602081015160a082015160e083015161010084015161012090940151929d999c50909a50959850949690955092505050565b60008087878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509394507fd6a4bc50000000000000000000000000000000000000000000000000000000009361082093506004925090508a8c6116eb565b61082991611715565b7fffffffff000000000000000000000000000000000000000000000000000000001614806108ae57507fa548ec5f00000000000000000000000000000000000000000000000000000000610881600460008a8c6116eb565b61088a91611715565b7fffffffff0000000000000000000000000000000000000000000000000000000016145b8061091057507fd903b917000000000000000000000000000000000000000000000000000000006108e3600460008a8c6116eb565b6108ec91611715565b7fffffffff0000000000000000000000000000000000000000000000000000000016145b1561093257610922876004818b6116eb565b81019061092f919061190b565b90505b6000818060200190518101906109489190611c59565b90507f72366cd3000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610a3a5760006109af60048085516109a79190611977565b859190611094565b8060200190518101906109c29190611e34565b91505080600001518051906020012086866040516109e1929190611c2d565b6040518091039020148015610a305750602081015173ffffffffffffffffffffffffffffffffffffffff16610a18888a018a611e98565b73ffffffffffffffffffffffffffffffffffffffff16145b9350505050610d7a565b7f7c0ce6e9000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610aca576000610a9760048085516109a79190611977565b806020019051810190610aaa9190611eb5565b9250505080600001518051906020012086866040516109e1929190611c2d565b7f41e15319000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610b98576000610b2760048085516109a79190611977565b806020019051810190610b3a9190611ff0565b9150508060e00151805190602001208686604051610b59929190611c2d565b6040518091039020148015610a3057508060c00151805190602001208888604051610b85929190611c2d565b6040518091039020149350505050610d7a565b7f12e879e7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610c28576000610bf560048085516109a79190611977565b806020019051810190610c08919061204a565b925050508060e00151805190602001208686604051610b59929190611c2d565b7ffaf6a213000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610ce3576000610c8560048085516109a79190611977565b806020019051810190610c98919061219b565b9150508060600151805190602001208686604051610cb7929190611c2d565b6040518091039020148015610a3057508060400151805190602001208888604051610b85929190611c2d565b7f4f93ad26000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000821601610d73576000610d4060048085516109a79190611977565b806020019051810190610d5391906121f5565b925050508060600151805190602001208686604051610cb7929190611c2d565b6000925050505b9695505050505050565b60607fd6a4bc5000000000000000000000000000000000000000000000000000000000610db56004600085876116eb565b610dbe91611715565b7fffffffff00000000000000000000000000000000000000000000000000000000161480610e4357507fd903b91700000000000000000000000000000000000000000000000000000000610e166004600085876116eb565b610e1f91611715565b7fffffffff0000000000000000000000000000000000000000000000000000000016145b15610e95576000610e5783600481876116eb565b810190610e64919061190b565b9050610e7860048083516103c49190611977565b806020019051810190610e8b9190612273565b9250610eb3915050565b610ea282600481866116eb565b810190610eaf91906123a8565b9150505b92915050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091527fd6a4bc5000000000000000000000000000000000000000000000000000000000610f3a6004600085876116eb565b610f4391611715565b7fffffffff00000000000000000000000000000000000000000000000000000000161480610fc857507fa548ec5f00000000000000000000000000000000000000000000000000000000610f9b6004600085876116eb565b610fa491611715565b7fffffffff0000000000000000000000000000000000000000000000000000000016145b8061102a57507fd903b91700000000000000000000000000000000000000000000000000000000610ffd6004600085876116eb565b61100691611715565b7fffffffff0000000000000000000000000000000000000000000000000000000016145b1561107a57600061103e83600481876116eb565b81019061104b919061190b565b905061105f60048083516103c49190611977565b806020019051810190611072919061252b565b915050610eb3565b61108782600481866116eb565b8101906101af9190612560565b6060816110a281601f612595565b10156110da576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110e48284612595565b8451101561111e576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561113d57604051915060008252602082016040526111a5565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561117657805183526020928301920161115e565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60008083601f8401126111c057600080fd5b50813567ffffffffffffffff8111156111d857600080fd5b60208301915083602082850101111561022a57600080fd5b6000806020838503121561120357600080fd5b823567ffffffffffffffff81111561121a57600080fd5b611226858286016111ae565b90969095509350505050565b60005b8381101561124d578181015183820152602001611235565b50506000910152565b6000815180845261126e816020860160208601611232565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b84811015611380577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08684030189528151805173ffffffffffffffffffffffffffffffffffffffff908116855285820151811686860152604080830151821690860152606080830151909116908501526080808201519085015260a08082015160e0828701819052919061135383880182611256565b9250505060c080830151925061136c8187018415159052565b5099850199935050908301906001016112bd565b5090979650505050505050565b6020815260006101af60208301846112a0565b60006101408251845260208301518160208601526113c082860182611256565b915050604083015184820360408601526113da8282611256565b9150506060830151611404606086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608083015161142c608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a083015161145460a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e08501526101008084015161147d8287018215159052565b50506101209283015115159390920192909252919050565b6040815260006114a860408301856113a0565b82810360208401526114ba81856112a0565b95945050505050565b6020815260006101af60208301846113a0565b73ffffffffffffffffffffffffffffffffffffffff811681146114f857600080fd5b50565b8035611506816114d6565b919050565b80151581146114f857600080fd5b80356115068161150b565b6000806000806000806000806000806101008b8d03121561154457600080fd5b8a3567ffffffffffffffff8082111561155c57600080fd5b6115688e838f016111ae565b909c509a5060208d013591508082111561158157600080fd5b5061158e8d828e016111ae565b90995097505060408b01356115a2816114d6565b955060608b01356115b2816114d6565b945060808b0135935060a08b0135925060c08b01356115d08161150b565b915060e08b01356115e08161150b565b809150509295989b9194979a5092959850565b60e08152600061160660e083018a611256565b73ffffffffffffffffffffffffffffffffffffffff988916602084015296909716604082015260608101949094526080840192909252151560a0830152151560c09091015292915050565b6000806000806000806060878903121561166a57600080fd5b863567ffffffffffffffff8082111561168257600080fd5b61168e8a838b016111ae565b909850965060208901359150808211156116a757600080fd5b6116b38a838b016111ae565b909650945060408901359150808211156116cc57600080fd5b506116d989828a016111ae565b979a9699509497509295939492505050565b600080858511156116fb57600080fd5b8386111561170857600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156117555780818660040360031b1b83161692505b505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff811182821017156117af576117af61175d565b60405290565b604051610140810167ffffffffffffffff811182821017156117af576117af61175d565b604051610100810167ffffffffffffffff811182821017156117af576117af61175d565b60405160c0810167ffffffffffffffff811182821017156117af576117af61175d565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156118675761186761175d565b604052919050565b600067ffffffffffffffff8211156118895761188961175d565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126118c657600080fd5b81356118d96118d48261186f565b611820565b8181528460208386010111156118ee57600080fd5b816020850160208301376000918101602001919091529392505050565b60006020828403121561191d57600080fd5b813567ffffffffffffffff81111561193457600080fd5b611940848285016118b5565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610eb357610eb3611948565b600082601f83011261199b57600080fd5b81516119a96118d48261186f565b8181528460208386010111156119be57600080fd5b611940826020830160208701611232565b8051611506816114d6565b600067ffffffffffffffff8211156119f4576119f461175d565b5060051b60200190565b80516115068161150b565b600082601f830112611a1a57600080fd5b81516020611a2a6118d4836119da565b82815260059290921b84018101918181019086841115611a4957600080fd5b8286015b84811015611b4557805167ffffffffffffffff80821115611a6e5760008081fd5b818901915060e0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848d03011215611aa75760008081fd5b611aaf61178c565b611aba8885016119cf565b81526040611ac98186016119cf565b898301526060611ada8187016119cf565b8284015260809150611aed8287016119cf565b818401525060a0808601518284015260c091508186015185811115611b125760008081fd5b611b208f8c838a010161198a565b828501525050611b318386016119fe565b908201528652505050918301918301611a4d565b509695505050505050565b60008060008060008060c08789031215611b6957600080fd5b86519550602087015167ffffffffffffffff80821115611b8857600080fd5b611b948a838b0161198a565b96506040890151915080821115611baa57600080fd5b611bb68a838b0161198a565b955060608901519150611bc8826114d6565b608089015160a08a0151929550935080821115611be457600080fd5b50611bf189828a01611a09565b9150509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b8183823760009101908152919050565b60008251611c4f818460208701611232565b9190910192915050565b600060208284031215611c6b57600080fd5b81517fffffffff00000000000000000000000000000000000000000000000000000000811681146101af57600080fd5b60006101408284031215611cae57600080fd5b611cb66117b5565b905081518152602082015167ffffffffffffffff80821115611cd757600080fd5b611ce38583860161198a565b60208401526040840151915080821115611cfc57600080fd5b50611d098482850161198a565b604083015250611d1b606083016119cf565b6060820152611d2c608083016119cf565b6080820152611d3d60a083016119cf565b60a082015260c082015160c082015260e082015160e0820152610100611d648184016119fe565b90820152610120611d768382016119fe565b9082015292915050565b805163ffffffff8116811461150657600080fd5b600060e08284031215611da657600080fd5b611dae61178c565b9050815167ffffffffffffffff811115611dc757600080fd5b611dd38482850161198a565b825250611de2602083016119cf565b60208201526040820151604082015260608201516060820152611e07608083016119cf565b6080820152611e1860a08301611d80565b60a0820152611e2960c083016119fe565b60c082015292915050565b60008060408385031215611e4757600080fd5b825167ffffffffffffffff80821115611e5f57600080fd5b611e6b86838701611c9b565b93506020850151915080821115611e8157600080fd5b50611e8e85828601611d94565b9150509250929050565b600060208284031215611eaa57600080fd5b81356101af816114d6565b600080600060608486031215611eca57600080fd5b835167ffffffffffffffff80821115611ee257600080fd5b611eee87838801611c9b565b94506020860151915080821115611f0457600080fd5b611f1087838801611a09565b93506040860151915080821115611f2657600080fd5b50611f3386828701611d94565b9150509250925092565b60006101008284031215611f5057600080fd5b611f586117d9565b90508151815260208201516020820152604082015160408201526060820151606082015260808201516080820152611f9260a083016119cf565b60a082015260c082015167ffffffffffffffff80821115611fb257600080fd5b611fbe8583860161198a565b60c084015260e0840151915080821115611fd757600080fd5b50611fe48482850161198a565b60e08301525092915050565b6000806040838503121561200357600080fd5b825167ffffffffffffffff8082111561201b57600080fd5b61202786838701611c9b565b9350602085015191508082111561203d57600080fd5b50611e8e85828601611f3d565b60008060006060848603121561205f57600080fd5b835167ffffffffffffffff8082111561207757600080fd5b61208387838801611c9b565b9450602086015191508082111561209957600080fd5b6120a587838801611a09565b935060408601519150808211156120bb57600080fd5b50611f3386828701611f3d565b805167ffffffffffffffff8116811461150657600080fd5b80516007811061150657600080fd5b600060c0828403121561210157600080fd5b6121096117fd565b905061211482611d80565b8152612122602083016120c8565b6020820152604082015167ffffffffffffffff8082111561214257600080fd5b61214e8583860161198a565b6040840152606084015191508082111561216757600080fd5b506121748482850161198a565b6060830152506080820151608082015261219060a083016120e0565b60a082015292915050565b600080604083850312156121ae57600080fd5b825167ffffffffffffffff808211156121c657600080fd5b6121d286838701611c9b565b935060208501519150808211156121e857600080fd5b50611e8e858286016120ef565b60008060006060848603121561220a57600080fd5b835167ffffffffffffffff8082111561222257600080fd5b61222e87838801611c9b565b9450602086015191508082111561224457600080fd5b61225087838801611a09565b9350604086015191508082111561226657600080fd5b50611f33868287016120ef565b6000806040838503121561228657600080fd5b825167ffffffffffffffff8082111561229e57600080fd5b6122aa86838701611c9b565b935060208501519150808211156122c057600080fd5b50611e8e85828601611a09565b600061014082840312156122e057600080fd5b6122e86117b5565b905081358152602082013567ffffffffffffffff8082111561230957600080fd5b612315858386016118b5565b6020840152604084013591508082111561232e57600080fd5b5061233b848285016118b5565b60408301525061234d606083016114fb565b606082015261235e608083016114fb565b608082015261236f60a083016114fb565b60a082015260c082013560c082015260e082013560e0820152610100612396818401611519565b90820152610120611d76838201611519565b600080604083850312156123bb57600080fd5b823567ffffffffffffffff808211156123d357600080fd5b6123df868387016122cd565b93506020915081850135818111156123f657600080fd5b8501601f8101871361240757600080fd5b80356124156118d4826119da565b81815260059190911b8201840190848101908983111561243457600080fd5b8584015b8381101561251a5780358681111561244f57600080fd5b850160e0818d037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001121561248357600080fd5b61248b61178c565b6124968983016114fb565b81526124a4604083016114fb565b898201526124b4606083016114fb565b60408201526124c5608083016114fb565b606082015260a0820135608082015260c080830135898111156124e85760008081fd5b6124f68f8c838701016118b5565b60a08401525061250860e08401611519565b90820152845250918601918601612438565b508096505050505050509250929050565b60006020828403121561253d57600080fd5b815167ffffffffffffffff81111561255457600080fd5b61194084828501611c9b565b60006020828403121561257257600080fd5b813567ffffffffffffffff81111561258957600080fd5b611940848285016122cd565b80820180821115610eb357610eb361194856fea26469706673582212202ef9101381b4b01869e18f233f1b226dc7b31544057b80c88401062fdcb50edf64736f6c63430008110033";
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
