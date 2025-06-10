import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HopFacetOptimized, HopFacetOptimizedInterface } from "../HopFacetOptimized";
declare type HopFacetOptimizedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HopFacetOptimized__factory extends ContractFactory {
    constructor(...args: HopFacetOptimizedConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<HopFacetOptimized>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): HopFacetOptimized;
    connect(signer: Signer): HopFacetOptimized__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506126b18061001c5f395ff3fe608060405260043610610093575f3560e01c806342afe79a116100665780638d03f4561161004c5780638d03f45614610123578063ca360ae014610136578063d40e64cc14610149575f5ffd5b806342afe79a146100fd57806355c99cd814610110575f5ffd5b806303add8c3146100975780630680ded4146100ac578063082bc047146100cb5780630b4cb5d8146100de575b5f5ffd5b6100aa6100a5366004611d8f565b61015c565b005b3480156100b7575f5ffd5b506100aa6100c6366004611e29565b6102b5565b6100aa6100d9366004611d8f565b61034d565b3480156100e9575f5ffd5b506100aa6100f8366004611d8f565b6103b2565b6100aa61010b366004611fd8565b6104ee565b6100aa61011e366004611d8f565b610653565b6100aa610131366004611fd8565b61072a565b6100aa610144366004611fd8565b6107b8565b6100aa610157366004611fd8565b610888565b61016c60c0820160a0830161212a565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f561019a61010084013560c0860135612179565b60e08501356101af60c0870160a0880161212a565b8660c00135866060013587608001358860c00160208101906101d1919061212a565b60405160e089811b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482019790975273ffffffffffffffffffffffffffffffffffffffff958616602482015260448101949094526064840192909252608483015290911660a48201529085013560c482015260e4015b5f604051808303818588803b158015610263575f5ffd5b505af1158015610275573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516102a99190612233565b60405180910390a15050565b6102bd6109af565b5f5b838110156103465761033e8383838181106102dc576102dc612376565b90506020020160208101906102f1919061212a565b86868481811061030357610303612376565b9050602002016020810190610318919061212a565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610a24565b6001016102bf565b5050505050565b61036c61036060a084016080850161212a565b33308560c00135610a55565b61037c60c0820160a0830161212a565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f561010083013560e08501356101af60c0870160a0880161212a565b6103c561036060a084016080850161212a565b6103d560c0820160a0830161212a565b73ffffffffffffffffffffffffffffffffffffffff1663eea0d7b260e084013561040560c0860160a0870161212a565b604080517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019390935273ffffffffffffffffffffffffffffffffffffffff909116602483015260c08601356044830152843560648301526020850135608483015284013560a4820152606084013560c4820152608084013560e4820152610104015f604051808303815f87803b1580156104a9575f5ffd5b505af11580156104bb573d5f5f3e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516102a99190612233565b610508845f01518560c00151858533866101000135610b17565b60c08086019190915261052090820160a0830161212a565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f58261010001358660e001518760a001518860c00151866060013587608001358860c001602081019061056d919061212a565b60405160e089811b7fffffffff00000000000000000000000000000000000000000000000000000000168252600482019790975273ffffffffffffffffffffffffffffffffffffffff958616602482015260448101949094526064840192909252608483015290911660a48201529085013560c482015260e4015b5f604051808303818588803b1580156105ff575f5ffd5b505af1158015610611573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161064591906123ef565b60405180910390a150505050565b61066360c0820160a0830161212a565b73ffffffffffffffffffffffffffffffffffffffff1663eea0d7b260c0840180359060e0860135906106989060a0880161212a565b604080517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b168152600481019390935273ffffffffffffffffffffffffffffffffffffffff909116602483015260c08701356044830152853560648301526020860135608483015285013560a4820152606085013560c4820152608085013560e48201526101040161024c565b610744845f01518560c00151858533866101000135610b17565b60c08086019190915261075c90820160a0830161212a565b73ffffffffffffffffffffffffffffffffffffffff1663deace8f58261010001358660c0015161078c9190612179565b8660e001518760a001518860c00151866060013587608001358860c001602081019061056d919061212a565b6107cc845f01518560c00151858533610cb2565b60c0808601919091526107e490820160a0830161212a565b60c085015160e086015160a0870151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019390935273ffffffffffffffffffffffffffffffffffffffff918216602484015260448301849052853560648401526020860135608484015285013560a4830152606085013560c4830152608085013560e4830152929092169163eea0d7b29190610104016105e8565b61089c845f01518560c00151858533610cb2565b60c0808601919091526108b490820160a0830161212a565b60e085015160a086015160c0870151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501526044840191909152843560648401526020850135608484015284013560a4830152606084013560c4830152608084013560e4830152919091169063eea0d7b290610104015f604051808303815f87803b15801561096a575f5ffd5b505af115801561097c573d5f5f3e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161064591906123ef565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610a22576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b610a508383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610df0565b505050565b73ffffffffffffffffffffffffffffffffffffffff8416610aa2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610aef576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b1173ffffffffffffffffffffffffffffffffffffffff8516848484610f17565b50505050565b5f83808203610b52576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610b606001856124ff565b818110610b6f57610b6f612376565b9050602002810190610b819190612512565b610b9290608081019060600161212a565b90505f610b9e82610f6f565b905073ffffffffffffffffffffffffffffffffffffffff8216610bc857610bc534826124ff565b90505b5f610bd38989610fb9565b9050610bdf89896110c3565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610c1a818b8b8561112f565b5f83610c2586610f6f565b610c2f91906124ff565b905073ffffffffffffffffffffffffffffffffffffffff8516610c5957610c5688826124ff565b90505b8b811015610ca2576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b5f82808203610ced576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610cfb6001856124ff565b818110610d0a57610d0a612376565b9050602002810190610d1c9190612512565b610d2d90608081019060600161212a565b90505f610d3982610f6f565b905073ffffffffffffffffffffffffffffffffffffffff8216610d6357610d6034826124ff565b90505b5f610d6e8888610fb9565b9050610d7a88886110c3565b610d878a898989856114da565b5f82610d9285610f6f565b610d9c91906124ff565b905089811015610de2576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610c99565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615610b115773ffffffffffffffffffffffffffffffffffffffff8316610e59576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610ecc573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ef0919061254e565b1015610b1157610b1173ffffffffffffffffffffffffffffffffffffffff85168483611736565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610f6257637939f4245f526004601cfd5b5f60605260405250505050565b5f73ffffffffffffffffffffffffffffffffffffffff821615610fb157610fac73ffffffffffffffffffffffffffffffffffffffff8316306117bd565b610fb3565b475b92915050565b6060815f8167ffffffffffffffff811115610fd657610fd6611e95565b604051908082528060200260200182016040528015610fff578160200160208202803683370190505b5090505f805b838110156110b85786868281811061101f5761101f612376565b90506020028101906110319190612512565b61104290608081019060600161212a565b915061104d82610f6f565b83828151811061105f5761105f612376565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110b0573483828151811061109857611098612376565b602002602001018181516110ac91906124ff565b9052505b600101611005565b509095945050505050565b5f5b81811015610a5057368383838181106110e0576110e0612376565b90506020028101906110f29190612512565b905061110460e0820160c08301612565565b156111265761112661111c606083016040840161212a565b82608001356117f0565b506001016110c5565b6020840151604085015184918491849083805f5b818110156112e657368b8b8381811061115e5761115e612376565b90506020028101906111709190612512565b905061119f611185606083016040840161212a565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061120157506112016111b8604083016020840161212a565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561121857506112186111b8602083018361212a565b801561129b575061129b61122f60a083018361257e565b61123d916004915f916125df565b61124691612606565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6112d1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c516112dd90826118a4565b50600101611143565b505080600114611433575f86866112fe6001856124ff565b81811061130d5761130d612376565b905060200281019061131f9190612512565b61133090608081019060600161212a565b90505f805b6113406001856124ff565b81101561142f575f89898381811061135a5761135a612376565b905060200281019061136c9190612512565b61137d90608081019060600161212a565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611426578682815181106113c4576113c4612376565b60200260200101516113d582610f6f565b6113df91906124ff565b92505f73ffffffffffffffffffffffffffffffffffffffff821615611404575f611406565b865b90508084111561142457611424828a61141f84886124ff565b611b76565b505b50600101611335565b5050505b5f5b818110156114cd575f87878381811061145057611450612376565b90506020028101906114629190612512565b61147390606081019060400161212a565b90505f61147f82610f6f565b90505f73ffffffffffffffffffffffffffffffffffffffff8316156114a4575f6114a6565b855b9050808211156114bf576114bf838961141f84866124ff565b836001019350505050611435565b5050505050505050505050565b8383838382805f5b818110156115b457368b8b838181106114fd576114fd612376565b905060200281019061150f9190612512565b9050611524611185606083016040840161212a565b8061153d575061153d6111b8604083016020840161212a565b801561155457506115546111b8602083018361212a565b801561156b575061156b61122f60a083018361257e565b6115a1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115ab8d826118a4565b506001016114e2565b5050806001146116cd575f85856115cc6001856124ff565b8181106115db576115db612376565b90506020028101906115ed9190612512565b6115fe90608081019060600161212a565b90505f805b61160e6001856124ff565b8110156116c9575f88888381811061162857611628612376565b905060200281019061163a9190612512565b61164b90608081019060600161212a565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146116c05785828151811061169257611692612376565b60200260200101516116a382610f6f565b6116ad91906124ff565b925082156116c0576116c0818885611b76565b50600101611603565b5050505b5f5b818110156114cd575f8686838181106116ea576116ea612376565b90506020028101906116fc9190612512565b61170d90606081019060400161212a565b90505f61171982610f6f565b9050801561172c5761172c828783611b76565b50506001016116cf565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166117b4575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166117b457633e3f8f735f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f03611829576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611882578034101561187e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61187e73ffffffffffffffffffffffffffffffffffffffff8316333084610f17565b6118b96118b4602083018361212a565b611ba6565b6118ef576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361192e576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611942611185606085016040860161212a565b61194c575f611952565b82608001355b90505f61196d611968606086016040870161212a565b610f6f565b90505f611983611968608087016060880161212a565b9050825f036119b9576119b961199f606087016040880161212a565b6119af604088016020890161212a565b8760800135610a24565b8460800135821015611a04576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610c99565b5f80611a13602088018861212a565b73ffffffffffffffffffffffffffffffffffffffff1685611a3760a08a018a61257e565b604051611a4592919061266c565b5f6040518083038185875af1925050503d805f8114611a7f576040519150601f19603f3d011682016040523d82523d5f602084013e611a84565b606091505b509150915081611a9757611a9781611c3a565b5f611aab61196860808a0160608b0161212a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611adc60208b018b61212a565b611aec60608c0160408d0161212a565b611afc60808d0160608e0161212a565b8c60800135898711611b0e5786611b18565b611b188a886124ff565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611b9b57610a508282611c44565b610a50838383611cb1565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000821601611c3157506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8216611c91576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61187e73ffffffffffffffffffffffffffffffffffffffff831682611d1f565b73ffffffffffffffffffffffffffffffffffffffff8216611cfe576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a5073ffffffffffffffffffffffffffffffffffffffff84168383611d38565b5f385f3884865af161187e5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166117b4576390b8ec185f526004601cfd5b5f6101208284031215611d89575f5ffd5b50919050565b5f5f6101408385031215611da1575f5ffd5b823567ffffffffffffffff811115611db7575f5ffd5b83016101408186031215611dc9575f5ffd5b9150611dd88460208501611d78565b90509250929050565b5f5f83601f840112611df1575f5ffd5b50813567ffffffffffffffff811115611e08575f5ffd5b6020830191508360208260051b8501011115611e22575f5ffd5b9250929050565b5f5f5f5f60408587031215611e3c575f5ffd5b843567ffffffffffffffff811115611e52575f5ffd5b611e5e87828801611de1565b909550935050602085013567ffffffffffffffff811115611e7d575f5ffd5b611e8987828801611de1565b95989497509550505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611ee657611ee6611e95565b60405290565b5f82601f830112611efb575f5ffd5b813567ffffffffffffffff811115611f1557611f15611e95565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611f6257611f62611e95565b604052818152838201602001851015611f79575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611fb6575f5ffd5b50565b8035611fc481611f95565b919050565b80358015158114611fc4575f5ffd5b5f5f5f5f6101608587031215611fec575f5ffd5b843567ffffffffffffffff811115612002575f5ffd5b85016101408188031215612014575f5ffd5b61201c611ec2565b81358152602082013567ffffffffffffffff811115612039575f5ffd5b61204589828501611eec565b602083015250604082013567ffffffffffffffff811115612064575f5ffd5b61207089828501611eec565b60408301525061208260608301611fb9565b606082015261209360808301611fb9565b60808201526120a460a08301611fb9565b60a082015260c0828101359082015260e080830135908201526120ca6101008301611fc9565b6101008201526120dd6101208301611fc9565b610120820152945050602085013567ffffffffffffffff8111156120ff575f5ffd5b61210b87828801611de1565b909450925061211f90508660408701611d78565b905092959194509250565b5f6020828403121561213a575f5ffd5b813561214581611f95565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b80820180821115610fb357610fb361214c565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126121bf575f5ffd5b830160208101925035905067ffffffffffffffff8111156121de575f5ffd5b803603821315611e22575f5ffd5b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60208082528235828201525f9061224c9084018461218c565b6101406040850152612263610160850182846121ec565b915050612273604085018561218c565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526122a88382846121ec565b925050506122b860608501611fb9565b73ffffffffffffffffffffffffffffffffffffffff81166080850152506122e160808501611fb9565b73ffffffffffffffffffffffffffffffffffffffff811660a08501525061230a60a08501611fb9565b73ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084013560e0848101919091528401356101008085019190915261234d908501611fc9565b801515610120850152506123646101208501611fc9565b8015156101408501525b509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526124166101608401826123a3565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261245182826123a3565b915050606084015161247b608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516124ea61012085018215159052565b5061012084015180151561014085015261236e565b81810381811115610fb357610fb361214c565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612544575f5ffd5b9190910192915050565b5f6020828403121561255e575f5ffd5b5051919050565b5f60208284031215612575575f5ffd5b61214582611fc9565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126125b1575f5ffd5b83018035915067ffffffffffffffff8211156125cb575f5ffd5b602001915036819003821315611e22575f5ffd5b5f5f858511156125ed575f5ffd5b838611156125f9575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612665577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f910190815291905056fea264697066735822122018393bbd40f314850082072d917342b7c729784960dc2d9ebc843352b39cbe8f64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "setApprovalForBridges";
        readonly inputs: readonly [{
            readonly name: "bridges";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "tokensToApprove";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaHopL1ERC20";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaHopL1Native";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaHopL2ERC20";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaHopL2Native";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaHopL1ERC20";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaHopL1Native";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaHopL2ERC20";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaHopL2Native";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hopBridge";
                readonly type: "address";
                readonly internalType: "contract IHopBridge";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
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
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }];
    static createInterface(): HopFacetOptimizedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HopFacetOptimized;
}
export {};
