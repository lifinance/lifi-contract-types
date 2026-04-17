import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LiFiIntentEscrowFacet, LiFiIntentEscrowFacetInterface } from "../LiFiIntentEscrowFacet";
type LiFiIntentEscrowFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LiFiIntentEscrowFacet__factory extends ContractFactory {
    constructor(...args: LiFiIntentEscrowFacetConstructorParams);
    deploy(_inputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LiFiIntentEscrowFacet>;
    getDeployTransaction(_inputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LiFiIntentEscrowFacet;
    connect(signer: Signer): LiFiIntentEscrowFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161234638038061234683398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b60805161228e6100b85f395f81816048015281816107f801526109f2015261228e5ff3fe608060405260043610610033575f3560e01c80631fe5bb31146100375780635627b1f31461009357806393057564146100a8575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a66100a1366004611b79565b6100c7565b005b3480156100b3575f5ffd5b506100a66100c2366004611c3f565b6102f0565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610142576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556080850151859073ffffffffffffffffffffffffffffffffffffffff16610199576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f6101a53447611ca4565b9050878061010001516101e4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561023e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361027b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6102908b5f01518c60c001518c8c336104be565b90508a60c001518111156102bc576102bc8b60800151338d60c00151846102b79190611ca4565b610600565b6102c68b89610635565b5047915050818111156102e2576102e25f846102b78585611ca4565b50505f909255505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161036b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556080830151839073ffffffffffffffffffffffffffffffffffffffff166103c2576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b836103e58160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561041c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610459576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610100015115610497576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104a986608001518760c00151610b6d565b6104b38686610635565b50505f909155505050565b5f828082036104f9576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610507600185611ca4565b81811061051657610516611cdc565b90506020028101906105289190611d09565b610539906080810190606001611d45565b90505f61054582610c21565b905073ffffffffffffffffffffffffffffffffffffffff821661056f5761056c3482611ca4565b90505b5f61057a8888610c6b565b90506105868888610d75565b6105938a89898985610de1565b5f8261059e85610c21565b6105a89190611ca4565b9050898110156105f2576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661062a57610625828261100f565b505050565b61062583838361107c565b61012082015115155f61064c610140840184611d65565b905011151514610688576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff81167311f111f111f111f111f111f111f111f111f111f11461070e57813573ffffffffffffffffffffffffffffffffffffffff82161461070e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61073b6107216040840160208501611d45565b73ffffffffffffffffffffffffffffffffffffffff161590565b15610772576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81356107aa576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161012001355f036107e8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015160c084015161081d827f0000000000000000000000000000000000000000000000000000000000000000836111c7565b6040805160018082528183019092525f91816020015b61083b611919565b81526020019060019003908161083357905050905060405180604001604052808473ffffffffffffffffffffffffffffffffffffffff16815260200183815250815f8151811061088d5761088d611cdc565b60209081029190910101526040805160018082528183019092525f91816020015b6108f06040518061010001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f815260200160608152602001606081525090565b8152602001906001900390816108ae57505060408051610100808201835260c0808b0135835260e0808c013560208501528c01519383019390935289013560608201526101208901356080820152883560a08201529192508101610958610140890189611d65565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509082525060200161099f610160890189611d65565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92018290525093909452505083518492506109e5576109e5611cdc565b60200260200101819052507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637515fd56604051806101000160405280896020016020810190610a4b9190611d45565b73ffffffffffffffffffffffffffffffffffffffff16815260200189604001358152602001468152602001896060016020810190610a899190611dcd565b63ffffffff168152602001610aa460a08b0160808c01611dcd565b63ffffffff168152602001610abf60c08b0160a08c01611d45565b73ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152506040518263ffffffff1660e01b8152600401610b009190611f7a565b5f604051808303815f87803b158015610b17575f5ffd5b505af1158015610b29573d5f5f3e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f187604051610b5c919061205c565b60405180910390a150505050505050565b805f03610ba6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610bff5780341015610bfb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610bfb73ffffffffffffffffffffffffffffffffffffffff83163330846111f3565b5f73ffffffffffffffffffffffffffffffffffffffff821615610c6357610c5e73ffffffffffffffffffffffffffffffffffffffff83163061124b565b610c65565b475b92915050565b6060815f8167ffffffffffffffff811115610c8857610c88611937565b604051908082528060200260200182016040528015610cb1578160200160208202803683370190505b5090505f5f5b83811015610d6a57868682818110610cd157610cd1611cdc565b9050602002810190610ce39190611d09565b610cf4906080810190606001611d45565b9150610cff82610c21565b838281518110610d1157610d11611cdc565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d625734838281518110610d4a57610d4a611cdc565b60200260200101818151610d5e9190611ca4565b9052505b600101610cb7565b509095945050505050565b5f5b818110156106255736838383818110610d9257610d92611cdc565b9050602002810190610da49190611d09565b9050610db660e0820160c0830161216f565b15610dd857610dd8610dce6060830160408401611d45565b8260800135610b6d565b50600101610d77565b83838383825f80805b83811015610ff357368c8c83818110610e0557610e05611cdc565b9050602002810190610e179190611d09565b9050610e266020820182611d45565b9350610e386040820160208301611d45565b9250610edb84610e4b60a0840184611d65565b610e59916004915f9161218a565b610e62916121b1565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580610fa95750610ef56107216060830160408401611d45565b158015610f2e57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015610fa9575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15610fe0576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fea8e8261127e565b50600101610dea565b50505050611004848484845f6114f1565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff821661105c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bfb73ffffffffffffffffffffffffffffffffffffffff831682611708565b73ffffffffffffffffffffffffffffffffffffffff82166110c9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc46148015611105575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b156111a6576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af115801561117c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111a09190612217565b50505050565b61062573ffffffffffffffffffffffffffffffffffffffff84168383611721565b6106258383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61176a565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661123e57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61129661128e6020830183611d45565b6017903b1190565b6112cc576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361130b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61131f6107216060850160408601611d45565b611329575f61132f565b82608001355b90505f61134a6113456080860160608701611d45565b610c21565b9050815f03611380576113806113666060860160408701611d45565b6113766040870160208801611d45565b86608001356111c7565b5f8061138f6020870187611d45565b73ffffffffffffffffffffffffffffffffffffffff16846113b360a0890189611d65565b6040516113c1929190612232565b5f6040518083038185875af1925050503d805f81146113fb576040519150601f19603f3d011682016040523d82523d5f602084013e611400565b606091505b5091509150816114135761141381611891565b5f6114276113456080890160608a01611d45565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861145860208a018a611d45565b61146860608b0160408c01611d45565b61147860808c0160608d01611d45565b8b6080013589871161148a5786611494565b6114948a88611ca4565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611500600182611ca4565b81811061150f5761150f611cdc565b90506020028101906115219190611d09565b611532906080810190606001611d45565b90505f5f5f5f5f5f5f5b888110156116f85761154f60018a611ca4565b8110801561155e575088600114155b15611639578d8d8281811061157557611575611cdc565b90506020028101906115879190611d09565b611598906080810190606001611d45565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611639578a81815181106115df576115df611cdc565b60200260200101516115f087610c21565b6115fa9190611ca4565b965073ffffffffffffffffffffffffffffffffffffffff86161561161e575f611620565b895b93508387111561163957611639868d6102b7878b611ca4565b8d8d8281811061164b5761164b611cdc565b905060200281019061165d9190611d09565b61166e906060810190604001611d45565b945061167985610c21565b925073ffffffffffffffffffffffffffffffffffffffff85161561169d575f61169f565b895b915081831180156116dc57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156116f0576116f0858d6102b78587611ca4565b60010161153c565b5050505050505050505050505050565b5f385f3884865af1610bfb5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611761576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff8416156111a05773ffffffffffffffffffffffffffffffffffffffff83166117d3576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611846573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061186a9190612241565b10156111a0576111a073ffffffffffffffffffffffffffffffffffffffff8516848361189b565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611761575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661176157633e3f8f735f526004601cfd5b60405180604001604052806002906020820280368337509192915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561198857611988611937565b60405290565b5f82601f83011261199d575f5ffd5b813567ffffffffffffffff8111156119b7576119b7611937565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611a0457611a04611937565b604052818152838201602001851015611a1b575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611a5a575f5ffd5b919050565b8015158114611a6c575f5ffd5b50565b8035611a5a81611a5f565b5f6101408284031215611a8b575f5ffd5b611a93611964565b823581529050602082013567ffffffffffffffff811115611ab2575f5ffd5b611abe8482850161198e565b602083015250604082013567ffffffffffffffff811115611add575f5ffd5b611ae98482850161198e565b604083015250611afb60608301611a37565b6060820152611b0c60808301611a37565b6080820152611b1d60a08301611a37565b60a082015260c0828101359082015260e08083013590820152611b436101008301611a6f565b610100820152611b566101208301611a6f565b61012082015292915050565b5f6101808284031215611b73575f5ffd5b50919050565b5f5f5f5f60608587031215611b8c575f5ffd5b843567ffffffffffffffff811115611ba2575f5ffd5b611bae87828801611a7a565b945050602085013567ffffffffffffffff811115611bca575f5ffd5b8501601f81018713611bda575f5ffd5b803567ffffffffffffffff811115611bf0575f5ffd5b8760208260051b8401011115611c04575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611c27575f5ffd5b611c3387828801611b62565b91505092959194509250565b5f5f60408385031215611c50575f5ffd5b823567ffffffffffffffff811115611c66575f5ffd5b611c7285828601611a7a565b925050602083013567ffffffffffffffff811115611c8e575f5ffd5b611c9a85828601611b62565b9150509250929050565b81810381811115610c65577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611d3b575f5ffd5b9190910192915050565b5f60208284031215611d55575f5ffd5b611d5e82611a37565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611d98575f5ffd5b83018035915067ffffffffffffffff821115611db2575f5ffd5b602001915036819003821315611dc6575f5ffd5b9250929050565b5f60208284031215611ddd575f5ffd5b813563ffffffff81168114611d5e575f5ffd5b5f8151808452602084019350602083015f5b82811015611e47578151865f5b6002811015611e2e578251825260209283019290910190600101611e0f565b5050506040959095019460209190910190600101611e02565b5093949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f82825180855260208501945060208160051b830101602085015f5b83811015611f6e577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030188528151805184526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015161010060c0860152611f3b610100860182611e51565b905060e0820151915084810360e0860152611f568183611e51565b60209a8b019a90955093909301925050600101611eb9565b50909695505050505050565b6020815273ffffffffffffffffffffffffffffffffffffffff825116602082015260208201516040820152604082015160608201525f6060830151611fc7608084018263ffffffff169052565b50608083015163ffffffff811660a08401525060a083015173ffffffffffffffffffffffffffffffffffffffff811660c08401525060c083015161010060e0840152612017610120840182611df0565b905060e08401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016101008501526120538282611e9d565b95945050505050565b60208152815160208201525f60208301516101406040840152612083610160840182611e51565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526120be8282611e51565b91505060608401516120e8608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161215761012085018215159052565b50610120840151801515610140850152509392505050565b5f6020828403121561217f575f5ffd5b8135611d5e81611a5f565b5f5f85851115612198575f5ffd5b838611156121a4575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612210577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612227575f5ffd5b8151611d5e81611a5f565b818382375f9101908152919050565b5f60208284031215612251575f5ffd5b505191905056fea2646970667358221220bc657256864248a1b2c9e2f554e597a085a881cc5a264d95c6183652a525cec764736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_inputSettler";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "LIFI_INTENT_ESCROW_SETTLER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaLiFiIntentEscrow";
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
            readonly name: "_lifiIntentData";
            readonly type: "tuple";
            readonly internalType: "struct LiFiIntentEscrowFacet.LiFiIntentEscrowData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAndRefundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputOracle";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputSettler";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputCall";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "outputContext";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaLiFiIntentEscrow";
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
            readonly name: "_lifiIntentData";
            readonly type: "tuple";
            readonly internalType: "struct LiFiIntentEscrowFacet.LiFiIntentEscrowData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAndRefundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputOracle";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputSettler";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputCall";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "outputContext";
                readonly type: "bytes";
                readonly internalType: "bytes";
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
        readonly name: "NativeAssetNotSupported";
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
    static createInterface(): LiFiIntentEscrowFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LiFiIntentEscrowFacet;
}
export {};
