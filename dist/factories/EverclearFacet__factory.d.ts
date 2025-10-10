import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { EverclearFacet, EverclearFacetInterface } from "../EverclearFacet";
type EverclearFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EverclearFacet__factory extends ContractFactory {
    constructor(...args: EverclearFacetConstructorParams);
    deploy(_feeAdapter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<EverclearFacet>;
    getDeployTransaction(_feeAdapter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): EverclearFacet;
    connect(signer: Signer): EverclearFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161267038038061267083398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516125b16100bf5f395f81816070015281816106cb015281816108140152610ad801526125b15ff3fe608060405260043610610033575f3560e01c8063089abd2c146100375780635c43f7e81461004c578063661d9c201461005f575b5f5ffd5b61004a610045366004611c74565b6100bb565b005b61004a61005a366004611cd9565b61033b565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611d9f565b90508461016b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610298576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102bb816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102f2576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030489608001518a60c001516105be565b61030e8989610672565b50479250505081811115610330576103305f8461032b8585611d9f565b610cb1565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103c63447611d9f565b905086806101000151610405576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610443576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104668160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561049d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610517576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8961053a816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610571576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105858b5f01518c60c001518c8c33610ce6565b60c08c01526105948b89610672565b504792505050818111156105b1576105b15f8461032b8585611d9f565b50505f9091555050505050565b805f036105f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610650578034101561064c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61064c73ffffffffffffffffffffffffffffffffffffffff8316333084610e28565b6040810135158061068a57508060c001358260c00151105b156106c1576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106f482608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610e80565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16036109ee578035610777576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805160018082528183019092525f9160208083019080368337019050509050660416edef1601be8360e00151036107e05763536f6c4d815f815181106107c1576107c1611dd7565b602002602001019063ffffffff16908163ffffffff1681525050610812565b6040517f3ea0d59500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633bd1c754836020013583855f0135876080015187604001358860c001358a60c001516108769190611d9f565b61088660808b0160608c01611e17565b61089660a08c0160808d01611e4c565b6108a360a08d018d611e67565b60405180606001604052808f60c0013581526020018f60e0013581526020018f8061010001906108d39190611e67565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e08e901b16815261094a9a99989796959493929190600401611fd2565b5f6040518083038185885af1158015610965573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109ab919081019061217a565b505060e08301518351604051843581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a350610c76565b60a082015173ffffffffffffffffffffffffffffffffffffffff16813514610a42576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805160018082528183019092525f916020808301908036833750505060e084015190915063ffffffff1015610aa5576040517f3ea0d59500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8260e00151815f81518110610abc57610abc611dd7565b602002602001019063ffffffff16908163ffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b4c204778360200135838660a00151876080015187604001355f1c8860c001358a60c00151610b3d9190611d9f565b610b4d60808b0160608c01611e17565b610b5d60a08c0160808d01611e4c565b610b6a60a08d018d611e67565b60405180606001604052808f60c0013581526020018f60e0013581526020018f806101000190610b9a9190611e67565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e08e901b168152610c119a999897969594939291906004016122ad565b5f6040518083038185885af1158015610c2c573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610c72919081019061217a565b5050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610ca59190612347565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316610cdb57610cd68282610eac565b505050565b610cd6838383610f19565b5f82808203610d21576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610d2f600185611d9f565b818110610d3e57610d3e611dd7565b9050602002810190610d50919061245a565b610d61906080810190606001612496565b90505f610d6d82610f87565b905073ffffffffffffffffffffffffffffffffffffffff8216610d9757610d943482611d9f565b90505b5f610da28888610fd1565b9050610dae88886110db565b610dbb8a89898985611147565b5f82610dc685610f87565b610dd09190611d9f565b905089811015610e1a576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610e7357637939f4245f526004601cfd5b5f60605260405250505050565b610cd68383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611309565b73ffffffffffffffffffffffffffffffffffffffff8216610ef9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61064c73ffffffffffffffffffffffffffffffffffffffff831682611436565b73ffffffffffffffffffffffffffffffffffffffff8216610f66576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cd673ffffffffffffffffffffffffffffffffffffffff8416838361144f565b5f73ffffffffffffffffffffffffffffffffffffffff821615610fc957610fc473ffffffffffffffffffffffffffffffffffffffff831630611498565b610fcb565b475b92915050565b6060815f8167ffffffffffffffff811115610fee57610fee6119dd565b604051908082528060200260200182016040528015611017578160200160208202803683370190505b5090505f5f5b838110156110d05786868281811061103757611037611dd7565b9050602002810190611049919061245a565b61105a906080810190606001612496565b915061106582610f87565b83828151811061107757611077611dd7565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110c857348382815181106110b0576110b0611dd7565b602002602001018181516110c49190611d9f565b9052505b60010161101d565b509095945050505050565b5f5b81811015610cd657368383838181106110f8576110f8611dd7565b905060200281019061110a919061245a565b905061111c60e0820160c083016124af565b1561113e5761113e6111346060830160408401612496565b82608001356105be565b506001016110dd565b83838383825f5b818110156112ef57368a8a8381811061116957611169611dd7565b905060200281019061117b919061245a565b90506111aa6111906060830160408401612496565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061120c575061120c6111c36040830160208401612496565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561122357506112236111c36020830183612496565b80156112a657506112a661123a60a0830183611e67565b611248916004915f916124c8565b611251916124ef565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6112dc576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112e68c826114cb565b5060010161114e565b50506112fe848484845f61173e565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156114305773ffffffffffffffffffffffffffffffffffffffff8316611372576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156113e5573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114099190612555565b10156114305761143073ffffffffffffffffffffffffffffffffffffffff85168483611955565b50505050565b5f385f3884865af161064c5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661148f576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6114e36114db6020830183612496565b6017903b1190565b611519576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611558576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61156c6111906060850160408601612496565b611576575f61157c565b82608001355b90505f6115976115926080860160608701612496565b610f87565b9050815f036115cd576115cd6115b36060860160408701612496565b6115c36040870160208801612496565b8660800135610e80565b5f806115dc6020870187612496565b73ffffffffffffffffffffffffffffffffffffffff168461160060a0890189611e67565b60405161160e92919061256c565b5f6040518083038185875af1925050503d805f8114611648576040519150601f19603f3d011682016040523d82523d5f602084013e61164d565b606091505b50915091508161166057611660816119d3565b5f6116746115926080890160608a01612496565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886116a560208a018a612496565b6116b560608b0160408c01612496565b6116c560808c0160608d01612496565b8b608001358987116116d757866116e1565b6116e18a88611d9f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261174d600182611d9f565b81811061175c5761175c611dd7565b905060200281019061176e919061245a565b61177f906080810190606001612496565b90505f5f5f5f5f5f5f5b888110156119455761179c60018a611d9f565b811080156117ab575088600114155b15611886578d8d828181106117c2576117c2611dd7565b90506020028101906117d4919061245a565b6117e5906080810190606001612496565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611886578a818151811061182c5761182c611dd7565b602002602001015161183d87610f87565b6118479190611d9f565b965073ffffffffffffffffffffffffffffffffffffffff86161561186b575f61186d565b895b93508387111561188657611886868d61032b878b611d9f565b8d8d8281811061189857611898611dd7565b90506020028101906118aa919061245a565b6118bb906060810190604001612496565b94506118c685610f87565b925073ffffffffffffffffffffffffffffffffffffffff8516156118ea575f6118ec565b895b9150818311801561192957508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561193d5761193d858d61032b8587611d9f565b600101611789565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661148f575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661148f57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611a2e57611a2e6119dd565b60405290565b604051610180810167ffffffffffffffff81118282101715611a2e57611a2e6119dd565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611a9f57611a9f6119dd565b604052919050565b5f67ffffffffffffffff821115611ac057611ac06119dd565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f830112611afb575f5ffd5b8135611b0e611b0982611aa7565b611a58565b818152846020838601011115611b22575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611b61575f5ffd5b919050565b80358015158114611b61575f5ffd5b5f6101408284031215611b86575f5ffd5b611b8e611a0a565b823581529050602082013567ffffffffffffffff811115611bad575f5ffd5b611bb984828501611aec565b602083015250604082013567ffffffffffffffff811115611bd8575f5ffd5b611be484828501611aec565b604083015250611bf660608301611b3e565b6060820152611c0760808301611b3e565b6080820152611c1860a08301611b3e565b60a082015260c0828101359082015260e08083013590820152611c3e6101008301611b66565b610100820152611c516101208301611b66565b61012082015292915050565b5f6101208284031215611c6e575f5ffd5b50919050565b5f5f60408385031215611c85575f5ffd5b823567ffffffffffffffff811115611c9b575f5ffd5b611ca785828601611b75565b925050602083013567ffffffffffffffff811115611cc3575f5ffd5b611ccf85828601611c5d565b9150509250929050565b5f5f5f5f60608587031215611cec575f5ffd5b843567ffffffffffffffff811115611d02575f5ffd5b611d0e87828801611b75565b945050602085013567ffffffffffffffff811115611d2a575f5ffd5b8501601f81018713611d3a575f5ffd5b803567ffffffffffffffff811115611d50575f5ffd5b8760208260051b8401011115611d64575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611d87575f5ffd5b611d9387828801611c5d565b91505092959194509250565b81810381811115610fcb577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b62ffffff81168114611e14575f5ffd5b50565b5f60208284031215611e27575f5ffd5b8135611e3281611e04565b9392505050565b65ffffffffffff81168114611e14575f5ffd5b5f60208284031215611e5c575f5ffd5b8135611e3281611e39565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e9a575f5ffd5b83018035915067ffffffffffffffff821115611eb4575f5ffd5b602001915036819003821315611ec8575f5ffd5b9250929050565b5f8151808452602084019350602083015f5b82811015611f0557815163ffffffff16865260209586019590910190600101611ee1565b5093949350505050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b80518252602081015160208301525f604082015160606040850152611fca6060850182611f56565b949350505050565b61012081525f611fe661012083018d611ecf565b8b602084015273ffffffffffffffffffffffffffffffffffffffff8b16604084015289606084015288608084015262ffffff881660a084015265ffffffffffff871660c084015282810360e0840152612040818688611f0f565b90508281036101008401526120558185611fa2565b9d9c50505050505050505050505050565b8051611b6181611e04565b805163ffffffff81168114611b61575f5ffd5b805167ffffffffffffffff81168114611b61575f5ffd5b8051611b6181611e39565b5f82601f8301126120b5575f5ffd5b815167ffffffffffffffff8111156120cf576120cf6119dd565b8060051b6120df60208201611a58565b918252602081850181019290810190868411156120fa575f5ffd5b6020860192505b838310156121235761211283612071565b825260209283019290910190612101565b9695505050505050565b5f82601f83011261213c575f5ffd5b815161214a611b0982611aa7565b81815284602083860101111561215e575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f5f6040838503121561218b575f5ffd5b8251602084015190925067ffffffffffffffff8111156121a9575f5ffd5b830161018081860312156121bb575f5ffd5b6121c3611a34565b815181526020808301519082015260408083015190820152606080830151908201526121f160808301612066565b608082015261220260a08301612071565b60a082015261221360c08301612084565b60c082015261222460e0830161209b565b60e0820152612236610100830161209b565b610100820152610120828101519082015261014082015167ffffffffffffffff811115612261575f5ffd5b61226d878285016120a6565b6101408301525061016082015167ffffffffffffffff81111561228e575f5ffd5b61229a8782850161212d565b6101608301525080925050509250929050565b61012081525f6122c161012083018d611ecf565b73ffffffffffffffffffffffffffffffffffffffff8c16602084015273ffffffffffffffffffffffffffffffffffffffff8b16604084015273ffffffffffffffffffffffffffffffffffffffff8a16606084015288608084015262ffffff881660a084015265ffffffffffff871660c084015282810360e0840152612040818688611f0f565b60208152815160208201525f6020830151610140604084015261236e610160840182611f56565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526123a98282611f56565b91505060608401516123d3608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161244261012085018215159052565b50610120840151801515610140850152509392505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261248c575f5ffd5b9190910192915050565b5f602082840312156124a6575f5ffd5b611e3282611b3e565b5f602082840312156124bf575f5ffd5b611e3282611b66565b5f5f858511156124d6575f5ffd5b838611156124e2575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561254e577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612565575f5ffd5b5051919050565b818382375f910190815291905056fea2646970667358221220a962ef8304154146784b5d8a00f4ab6fc95147cea3e16364dd2cc95eea684ea164736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_feeAdapter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "FEE_ADAPTER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IEverclearFeeAdapter";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaEverclear";
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
            readonly name: "_everclearData";
            readonly type: "tuple";
            readonly internalType: "struct EverclearFacet.EverclearData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "maxFee";
                readonly type: "uint24";
                readonly internalType: "uint24";
            }, {
                readonly name: "ttl";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "fee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "sig";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaEverclear";
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
            readonly name: "_everclearData";
            readonly type: "tuple";
            readonly internalType: "struct EverclearFacet.EverclearData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "maxFee";
                readonly type: "uint24";
                readonly internalType: "uint24";
            }, {
                readonly name: "ttl";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "fee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "sig";
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
        readonly name: "InvalidCallData";
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
        readonly name: "InvalidNonEVMReceiver";
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
    }, {
        readonly type: "error";
        readonly name: "UnsupportedEverclearChainId";
        readonly inputs: readonly [];
    }];
    static createInterface(): EverclearFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EverclearFacet;
}
export {};
